import { defineComponent, computed, reactive, ref, onMounted } from 'vue';
import VdsButton from '@/components/Button/Button.vue';
import { mdiPlus } from '@mdi/js';
import VdsPagination from '@/components/Pagination/Pagination.vue';
import VContent from '@/components/Content/VContent.vue';
import { Search } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import VFormFilter from '@/pages/Home/form/VFormFilter.vue';

export default defineComponent({
  components: {
    VdsButton,
    VdsPagination,
    VContent,
    VFormFilter
  },
  setup() {
    const store = useStore();
    const pagination = ref({ page: 1, page_size: 5 });
    const isOpenModalAdd = ref(false);
    const tableData = computed(() => store.getters['example/getCollection']);
    const isLoading = ref(false);
    const paginationCount = ref(1);

    const formDataFilters = reactive({});
    const dataSearch = reactive({});
    const activeSort = ref('');

    function togglModalAdd() {
      isOpenModalAdd.value = !isOpenModalAdd.value;
    }

    const fetchData = (params): Promise<void> =>
      store.dispatch('example/fetchData', { ...params, ...formDataFilters });

    const onChangePagination = async (data: any) => {
      pagination.value.page = data.page;
      pagination.value.page_size = data.page_size;
      await fetchData(pagination.value);
    };

    const handleApplyFilters = async () => {
      await store.dispatch('example/fetchData', {
        page: pagination.value.page,
        page_size: pagination.value.page_size,
        ...formDataFilters,
        ...dataSearch
      });
    };

    const handleSortChange = ({ column, prop, order }) => {
      activeSort.value = order == 'descending' ? '-' + prop : prop;
      //method by api request
      /* fetchData({
        page: pagination.value.page,
        page_size: pagination.value.page_size,
        ordering: activeSort.value
      });
      */
      //method by collection - ordering in memory
      /*
        const orderMemory = tableData.value.getCollectionOrderByParam(prop);
        store.commit('example/setCollection', orderMemory);
     */

      //por padrão o element já faz uma ordenação em memória
    };

    onMounted(async () => {
      await fetchData(pagination.value);
    });

    return {
      pagination,
      mdiPlus,
      Search,
      isOpenModalAdd,
      togglModalAdd,
      onChangePagination,
      tableData,
      isLoading,
      paginationCount,
      formDataFilters,
      dataSearch,
      handleApplyFilters,
      handleSortChange
    };
  }
});
