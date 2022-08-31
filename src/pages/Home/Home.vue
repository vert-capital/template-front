<template>
  <div class="home">
    <section class="v-title-home">
      <h1>Título</h1>
    </section>
    <v-content>
      <template #header>
        <el-row justify="end">
          <el-col :span="4">
            <el-input placeholder="Buscar..." :suffix-icon="Search" />
          </el-col>
        </el-row>
      </template>
      <el-table v-loading="isLoading" :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="60"></el-table-column>
      </el-table>

      <template #footer>
        <vds-pagination
          :count="obligationsCount"
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
