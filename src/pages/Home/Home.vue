<template>
  <div class="home">
    <section class="v-title-home">
      <h1>Título</h1>
      <vds-button @click="togglModalAdd">
        <slot>
          <SvgIcon type="mdi" :path="mdiPlus" :size="18"></SvgIcon>
          Adicionar
        </slot>
      </vds-button>
    </section>
    <v-content filter :event-search="handleApplyFilters" :data-search="dataSearch">
      <template #filter>
        <v-form-filter :form-value="formDataFilters" @apply-filters="handleApplyFilters" />
      </template>
      <el-row justify="end">
        <el-col :span="24">
          <el-table
            v-loading="isLoading"
            :data="tableData"
            style="width: 100%"
            @sort-change="handleSortChange"
          >
            <el-table-column prop="id" label="ID" width="60"></el-table-column>
            <el-table-column prop="name" label="Nome" width="200" sortable></el-table-column>
            <el-table-colum>
              <template #default="scope">
                <span>Opções</span>
              </template>
            </el-table-colum>
          </el-table>
        </el-col>
      </el-row>
      <template #footer>
        <vds-pagination
          :count="paginationCount"
          :on-handle-change="onChangePagination"
        ></vds-pagination>
      </template>
    </v-content>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped>
.v-title-home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
