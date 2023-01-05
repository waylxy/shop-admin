<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>欢迎光临</div>
        <div>《vue3+vite》实战项目演示网站</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div class="last">
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            round
            color="#626aef"
            class="w-[250px]"
            @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
import { reactive } from "vue";
// import { User, Lock } from "@element-plus/icons-vue";
// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});
const onSubmit = () => {
  console.log(form);
};
</script>
<style scoped>
.login-container {
  @apply bg-indigo-500 min-h-screen;
  .left,
  .right {
    @apply flex items-center justify-center;
  }
  .right {
    @apply bg-light-50  flex-col;
    .title {
      @apply font-bold text-3xl text-gray-800;
    }
    .last {
      @apply my-5 text-gray-300 flex items-center justify-center space-x-2;
    }
    .line {
      @apply h-[1px] w-16 bg-gray-200;
    }
  }
  .left > div > div:first-child {
    @apply text-light-50 font-bold text-3xl mb-4;
  }
  .left > div > div:last-child {
    @apply text-gray-200 text-sm;
  }
}
</style>
