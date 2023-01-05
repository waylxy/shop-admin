<template>
  <el-row class="bg-indigo-500 min-h-screen">
    <el-col :lg="16" :md="12" class="flex items-center justify-center">
      <div>
        <div class="text-light-50 font-bold text-3xl mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm">《vue3+vite》实战项目演示网站</div>
      </div>
    </el-col>
    <el-col
    :lg="8"
      :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div class="my-5 text-gray-300 flex items-center justify-center space-x-2">
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
    <el-form :model="form" class="w-[250px]">
    <el-form-item>
      <el-input v-model="form.username" placeholder="请输入用户名" />
    </el-form-item>
      <el-form-item>
      <el-input v-model="form.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item >
      <el-button type="primary"
       round color="#626aef"
        class="w-[250px]"
         @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
    </el-col>
  </el-row>
</template>
<script  setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username:'',
    password:''
    })
const onSubmit = () => {
  console.log(form)
}
</script>