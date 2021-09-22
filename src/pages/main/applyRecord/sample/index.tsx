import { defineComponent } from '@vue/runtime-core';
import { t } from '@/i18n/index';
import TableList from '../components/tableList';

export default defineComponent({
  name: 'sample',
  props: {},
  components: { TableList },
  setup() {
    return () => (
      <div class="sample">
        <TableList applyType="2" title={t('menu-management.sample_application')}></TableList>
      </div>
    );
  },
});
