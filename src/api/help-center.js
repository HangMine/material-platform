import axios from '@/utils/axios';

export const feedback = (data) => {
  return axios({
    method: 'post',
    url: '/msgcenter/feedback',
    data,
  });
};

export const feedbackComment = (data) => {
  return axios({
    method: 'post',
    url: '/msgcenter/feedback/comment',
    data,
  });
};
