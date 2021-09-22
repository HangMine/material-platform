/* eslint-disable */
const hsv2hsl = function (hue: number, sat: number, val: number) {
  return [
    hue,
    (sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue)) || 0,
    hue / 2,
  ];
};

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
const isOnePointZero = function (n: unknown) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};

const isPercentage = function (n: unknown) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
};

// Take input from [0, n] and return it as [0, 1]
const bound01 = function (value: number | string, max: number | string) {
  if (isOnePointZero(value)) value = '100%';

  const processPercent = isPercentage(value);
  value = Math.min((max as number), Math.max(0, parseFloat(`${value}`)));

  // Automatically convert percentage into number
  if (processPercent) {
    value = parseInt(`${value * (max as number)}`, 10) / 100;
  }

  // Handle floating point rounding errors
  if ((Math.abs(value - (max as number)) < 0.000001)) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return (value % (max as number)) / parseFloat(max as string);
};

const INT_HEX_MAP = {
  10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F',
};

export const toHex = function ({ r, g, b }) {
  const hexOne = function (value: number) {
    value = Math.min(Math.round(value), 255);
    const high = Math.floor(value / 16);
    const low = value % 16;
    return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`;
  };

  if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

  return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`;
};

const HEX_INT_MAP = {
  A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
};

const parseHexChannel = function (hex: string) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

export const hex2rgb = function(value: string){
  const hex = value.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex)) return;
  let r; let g; let
    b;

  if (hex.length === 3) {
    r = parseHexChannel(hex[0] + hex[0]);
    g = parseHexChannel(hex[1] + hex[1]);
    b = parseHexChannel(hex[2] + hex[2]);
  } else if (hex.length === 6 || hex.length === 8) {
    r = parseHexChannel(hex.substring(0, 2));
    g = parseHexChannel(hex.substring(2, 4));
    b = parseHexChannel(hex.substring(4, 6));
  }

  return {r,g,b}
}

const hsl2hsv = function (hue: number, sat: number, light: number) {
  sat /= 100;
  light /= 100;
  let smin = sat;
  const lmin = Math.max(light, 0.01);
  // let sv
  // let v

  light *= 2;
  sat *= (light <= 1) ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (light + sat) / 2;
  const sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100,
  };
};

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
const rgb2hsv = function (r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  const v = max;

  const d = max - min;
  const s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      }
      case g: {
        h = (b - r) / d + 2;
        break;
      }
      case b: {
        h = (r - g) / d + 4;
        break;
      }
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
};

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
const hsv2rgb = function (h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

export const cmyk2rgb = (c, m, y, k) => {
  // const c = _c/100;
  // const m = _m/100;
  // const y = _y/100;
  // const k = _k/100;
  // const c1 = 1 - c;
  // const m1 = 1 - m;
  // const k1 = 1 - k;
  // const y1 = 1 - y;
  // let x;
  // let r;
  // let g;
  // let b;
  // r = g = b = c1 * m1 * y1 * k1;
  // x = c1 * m1 * y1 * k;
  // r += 0.1373 * x;
  // g += 0.1216 * x;
  // b += 0.1255 * x;
  // x = c1 * m1 * y * k1;
  // r += x;
  // g += 0.949 * x;
  // x = c1 * m1 * y * k;
  // r += 0.1098 * x;
  // g += 0.102 * x;
  // x = c1 * m * y1 * k1;
  // r += 0.9255 * x;
  // b += 0.549 * x;
  // x = c1 * m * y1 * k;
  // r += 0.1412 * x;
  // x = c1 * m * y * k1;
  // r += 0.9294 * x;
  // g += 0.1098 * x;
  // b += 0.1412 * x;
  // x = c1 * m * y * k;
  // r += 0.1333 * x;
  // x = c * m1 * y1 * k1;
  // g += 0.6784 * x;
  // b += 0.9373 * x;
  // x = c * m1 * y1 * k;
  // g += 0.0588 * x;
  // b += 0.1412 * x;
  // x = c * m1 * y * k1;
  // g += 0.651 * x;
  // b += 0.3137 * x;
  // x = c * m1 * y * k;
  // g += 0.0745 * x;
  // x = c * m * y1 * k1;
  // r += 0.1804 * x;
  // g += 0.1922 * x;
  // b += 0.5725 * x;
  // x = c * m * y1 * k;
  // b += 0.0078 * x;
  // x = c * m * y * k1;
  // r += 0.2118 * x;
  // g += 0.2119 * x;
  // b += 0.2235 * x;

  if( c==="" ) c=0;
  if( m==="" ) m=0;
  if( y==="" ) y=0;
  if( k==="" ) k=0;
  c = parseFloat(c)/100;
  m = parseFloat(m)/100;
  y = parseFloat(y)/100;
  k = parseFloat(k)/100;
  if( c<0 ) c=0;
  if( m<0 ) m=0;
  if( y<0 ) y=0;
  if( k<0 ) k=0;
  if( c>1 ) c=1;
  if( m>1 ) m=1;
  if( y>1 ) y=1;
  if( k>1 ) k=1;
  let r = Math.round((1-c)*(1-k)*255);
  let g = Math.round((1-m)*(1-k)*255);
  let b = Math.round((1-y)*(1-k)*255);
  console.log('cmky ', c,m,y,k,'to', 'rgb', r,g,b);
  return {r, g, b}
};

export const rgb2cmyk = function ({ r, g, b }) {
  // if ((r == 0) && (g == 0) && (b == 0)) {
  //   return `cmyk(0,0,0,100)`;
  // } else {
  //     let calcR = 1 - (r / 255),
  //         calcG = 1 - (g / 255),
  //         calcB = 1 - (b / 255);

  //     let k = Math.min(calcR, Math.min(calcG, calcB)),
  //         c = (calcR - k) / (1 - k),
  //         m = (calcG - k) / (1 - k),
  //         y = (calcB - k) / (1 - k);
  //     return  `cmyk(${Math.round(c * 100)},${Math.round(m*100)},${Math.round(y*100)},${Math.round(k*100)})`;
  // }
  let c,m,y,k;
  if( r=="" ) r=0;
  if( g=="" ) g=0;
  if( b=="" ) b=0;
  if( r<0 ) r=0;
  if( g<0 ) g=0;
  if( b<0 ) b=0;
  if( r>255 ) r=255;
  if( g>255 ) g=255;
  if( b>255 ) b=255;
  let rr = parseInt(r);
  let gg = parseInt(g);
  let bb = parseInt(b);
  r = parseFloat(r)/255;
  g = parseFloat(g)/255;
  b = parseFloat(b)/255;
  k = 1-Math.max(r,g,b);
  if( k==1 ){
    c=m=y=0;
  }else {
    c = (1-r-k)/(1-k);
    m = (1-g-k)/(1-k);
    y = (1-b-k)/(1-k);
  }

  console.log('rgb ', rr,gg,bb , 'to', 'cmyk', c * 100,m * 100,y * 100,k * 100);
  return  `cmyk(${Math.round(c * 100)},${Math.round(m*100)},${Math.round(y*100)},${Math.round(k*100)})`;

  // let c = 1 - (r/255);
  // let m = 1 - (g/255);
  // let y = 1 - (b/255);
  // let k = 1;
  // if (r || g || b) {
  //   k = Math.min(c, Math.min(m, y));
  //   c = (c - k) / (1 - k);
  //   m = (m - k) / (1 - k);
  //   y = (y - k) / (1 - k);
  // } else {
  //   k = 1;
  // }
  // return `cmyk(${Math.floor(c * 100)},${Math.floor(m*100)},${Math.floor(y*100)},${Math.floor(k*100)})`;
};

export interface Options {
  enableAlpha: boolean
  format: string
  value?: string
}

export default class Color {
  private _hue = 0;
  private _saturation = 100;
  private _value = 100;
  private _alpha = 100;
  public enableAlpha = false;
  public format = 'hex';
  public value = '';
  public selected?: boolean;
  public _rgbValue = ''; // 因为后端存值为rgb, 所以实例中始终保存rgb结构值
  public _pauseReceive = false; // 暂停接受数据
  // public trigger: 'search' | 'pick' | 'input' | 'change-format' | 'prop-in' = null;
  constructor(options?: Options) {
    options = options || {} as Options;

    for (const option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.doOnChange();
  }

  set(prop: {[key: string]: any;} | any, value?: number) {
    if (arguments.length === 1 && typeof prop === 'object') {
      for (const p in prop) {
        if (prop.hasOwnProperty(p)) {
          this.set(p, prop[p]);
        }
      }
      return;
    }

    this[`_${prop}`] = value;
    this.doOnChange();
  }

  get(prop: string) {
    return this[`_${prop}`];
  }

  toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  }

  fromString(value) {
    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;

      this.doOnChange();
      return;
    }

    const fromHSV = (h, s, v) => {
      this._hue = Math.max(0, Math.min(360, h));
      this._saturation = Math.max(0, Math.min(100, s));
      this._value = Math.max(0, Math.min(100, v));

      this.doOnChange();
    };

    if (value.indexOf('hsl') !== -1) {
      const parts = value.replace(/hsla|hsl|\(|\)/gm, '')
        .split(/\s|,/g).filter(val => val !== '').map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));

      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = hsl2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
    } else if (value.indexOf('hsv') !== -1) {
      const parts = value.replace(/hsva|hsv|\(|\)/gm, '')
        .split(/\s|,/g).filter(val => val !== '').map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));

      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        fromHSV(parts[0], parts[1], parts[2]);
      }
    } else if (value.indexOf('rgb') !== -1) {
      const parts = value.replace(/rgba|rgb|\(|\)/gm, '')
        .split(/\s|,/g).filter(val => val !== '').map((val, index) => (index > 2 ? parseFloat(val) : parseInt(val, 10)));

      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      } else if (parts.length === 3) {
        this._alpha = 100;
      }
      if (parts.length >= 3) {
        const { h, s, v } = rgb2hsv(parts[0], parts[1], parts[2]);
        fromHSV(h, s, v);
      }
      this._rgbValue = `rgb(${parts[0]}, ${parts[1]}, ${parts[2]})`
    }else if(value.indexOf('cmyk') !== -1) {
      const parts = value.replace(/cmyk|\(|\)/gm, '')
      .split(/\s|,/g).filter(val => val !== '').map(val => parseInt(val, 10));
      if(parts.length >= 4){
        const { r, g, b } = cmyk2rgb(parts[0], parts[1], parts[2],parts[3]);
        const { h, s, v } = rgb2hsv(r, g, b);
        fromHSV(h, s, v);
        this._rgbValue = `rgb(${r}, ${g}, ${b})`
      }

    } else if (value.indexOf('#') !== -1) {
      const hex = value.replace('#', '').trim();
      // if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex)) return;
      // let r; let g; let
      //   b;

      // if (hex.length === 3) {
      //   r = parseHexChannel(hex[0] + hex[0]);
      //   g = parseHexChannel(hex[1] + hex[1]);
      //   b = parseHexChannel(hex[2] + hex[2]);
      // } else if (hex.length === 6 || hex.length === 8) {
      //   r = parseHexChannel(hex.substring(0, 2));
      //   g = parseHexChannel(hex.substring(2, 4));
      //   b = parseHexChannel(hex.substring(4, 6));
      // }
      const {r, g, b} = hex2rgb(value);

      if (hex.length === 8) {
        this._alpha = Math.floor(parseHexChannel(hex.substring(6)) / 255 * 100);
      } else if (hex.length === 3 || hex.length === 6) {
        this._alpha = 100;
      }

      const { h, s, v } = rgb2hsv(r, g, b);
      fromHSV(h, s, v);
      this._rgbValue = `rgb(${r}, ${g}, ${b})`
    }
  }

  compare(color) {
    return Math.abs(color._hue - this._hue) < 2
      && Math.abs(color._saturation - this._saturation) < 1
      && Math.abs(color._value - this._value) < 1
      && Math.abs(color._alpha - this._alpha) < 1;
  }

  doOnChange() {
    const {
      _hue, _saturation, _value, _alpha, format,
    } = this;

    if (this.enableAlpha) {
      switch (format) {
        case 'hsl': {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsla(${_hue},${Math.round(hsl[1] * 100)}%,${Math.round(hsl[2] * 100)}%,${_alpha / 100})`;
          break;
        }
        case 'hsv': {
          this.value = `hsva(${_hue},${Math.round(_saturation)}%,${Math.round(_value)}%,${_alpha / 100})`;
          break;
        }
        default: {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgba(${r},${g},${b},${_alpha / 100})`;
        }
      }
    } else {

      switch (format) {
        case 'hsl': {
          const hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = `hsl(${_hue},${Math.round(hsl[1] * 100)}%,${Math.round(hsl[2] * 100)}%)`;
          break;
        }
        case 'hsv': {
          this.value = `hsv(${_hue},${Math.round(_saturation)}%,${Math.round(_value)}%)`;
          break;
        }
        case 'rgb': {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          this.value = `rgb(${r},${g},${b})`;
          break;
        }
        case 'cmyk': {
          const { r, g, b } = hsv2rgb(_hue, _saturation, _value);
          // console.log(rgb2cmyk({r, g, b}))
          this.value = rgb2cmyk({r, g, b});
          break;
        }
        default: {
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
        }
      }
    }
  }
}
