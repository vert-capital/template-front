import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import VdsButton from '@/components/Button/Button.vue';
import { mdiPlus } from '@mdi/js';
import VdsPagination from '@/components/Pagination/Pagination.vue';
import VContent from '@/components/Content/VContent.vue';
import { Search } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    VdsButton,
    VdsPagination,
    VContent,
  },
  setup() {
    const pagination = ref({ page: 1, page_size: 5 });
    const store = useStore();
    const isOpenModalAdd = ref(false);
    const tableData = ref([{ id: 1 }]);
    const isLoading = ref(false);
    const paginationCount = ref(0);

    function togglModalAdd() {
      isOpenModalAdd.value = !isOpenModalAdd.value;
    }

    function onChangePagination(data: any) {
      pagination.value.page = data.page;
      pagination.value.page_size = data.page_size;
    }

    return {
      pagination,
      mdiPlus,
      Search,
      isOpenModalAdd,
      togglModalAdd,
      onChangePagination,
      tableData,
      isLoading,
      paginationCount
    };
  }
});
