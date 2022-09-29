<template>
  <el-form id="formRef" ref="formRef" :model="formData" label-position="top" class="v-filter__body">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="Documento" prop="document">
          <el-input v-model="formData.document" placeholder="000000000000000" />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <v-select
          v-model="formData.range_delayed_days"
          id-name="range_delayed_days"
          label="Faixa de atraso"
          :options="rangeDalayedDaysChoices"
        ></v-select>
      </el-col>
      <el-col :span="8">
        <v-select id-name="status" label="Status" :options="statusChoices"></v-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <v-check id-name="renegotiation">
          <el-checkbox v-model="formData.renegotiation" class="vpt-medium">
            Possui renegociação?
          </el-checkbox>
        </v-check>
      </el-col>
    </el-row>
    <div class="v-filter--btns">
      <vds-button style_type="shadow" @click="resetForm(formRef)"> Limpar filtros </vds-button>
      <vds-button @click="$emit('apply-filters')"> Aplicar filtros </vds-button>
    </div>
  </el-form>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { VSelect, VdsButton } from '@/components';
import { ElForm } from 'element-plus';

const props = defineProps({
  formValue: {
    type: Object,
    default: () => ({})
  },
  showFilter: { type: Boolean, default: false },
  isEdit: { type: Boolean, default: false }
});

const statusChoices = reactive<{ id: string; name: string }[]>([
  { id: 'vigente', name: 'Vigente' },
  { id: 'quitado', name: 'Quitado' },
  { id: 'destratado', name: 'Destratado' }
]);

const rangeDalayedDaysChoices = reactive<{ id: number; name: string }[]>([
  { id: 1, name: 'Até 30 dias' },
  { id: 2, name: 'De 31 a 60 dias' },
  { id: 3, name: 'De 61 a 90 dias' },
  { id: 4, name: 'De 91 a 120 dias' },
  { id: 5, name: 'De 121 a 150 dias' },
  { id: 6, name: 'De 151 a 180 dias' },
  { id: 7, name: 'De 181 a 360 dias' },
  { id: 8, name: 'Acima de 361 dias' }
]);

const formData = computed({
  get: () => props.formValue,
  set: (value) => emit('update:formValue', value)
});

const emit = defineEmits<{
  (event: 'update:formValue', formValue: any): void;
  (event: 'apply-filters'): void;
}>();

type FormInstance = InstanceType<typeof ElForm>;
const formRef = ref<FormInstance>();
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  formData.value.renegotiation = false;
};
</script>

<style lang="scss" scoped>
.v-filter--btns {
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
}
</style>
