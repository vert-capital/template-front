import { defineComponent, onMounted, reactive, ref } from 'vue';
import VdsButton from '@/components/Button/Button.vue';
import { mdiPlus } from '@mdi/js';
import VdsPagination from '@/components/Pagination/Pagination.vue';
import VContent from '@/components/Content/VContent.vue';
import { Search } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import VFormFilter from '@/pages/Home/form/VFormFilter.vue';
import { Time } from '@vert-capital/design-system';

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
    const tableData = computed(() => store.state.example.collection);
    const isLoading = ref(false);
    const paginationCount = ref(1);

    const formDataFilters = reactive({});
    const dataSearch = reactive({});
    const activeSort = ref('');

    function togglModalAdd() {
      isOpenModalAdd.value = !isOpenModalAdd.value;
    }

    const fetchDomain = (params): Promise<void> =>
      store.dispatch('example/fetchDomain', { ...params, ...formDataFilters });

    const onChangePagination = async (data: any) => {
      pagination.value.page = data.page;
      pagination.value.page_size = data.page_size;
      await fetchDomain(pagination.value);
    };

    const handleApplyFilters = async () => {
      await store.dispatch('example/fetchDomain', {
        page: pagination.value.page,
        page_size: pagination.value.page_size,
        ...formDataFilters,
        ...dataSearch
      });
    };

    const handleSortChange = ({ column, prop, order }) => {
      activeSort.value = order == 'descending' ? '-' + prop : prop;
      fetchDomain({
        page: pagination.value.page,
        page_size: pagination.value.page_size,
        ordering: activeSort.value
      });
    };

    const time = new Time();
    console.log(time);
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
