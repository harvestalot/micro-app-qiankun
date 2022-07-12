<template>
  <div class="login">
    <div class="login-container">
      <h2>登录</h2>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        labelAlign="left"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 18 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 10, span: 10 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const router = useRouter();

    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
      sessionStorage.setItem('userInfo', JSON.stringify(values));
      sessionStorage.setItem('token', 'token.SLJFSFL978SSD989SD8SDFD89SF8S9');
      router.push('/')
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
<style>
.login{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
}
.login-container{
  width: 360px;
  height: 300px;
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(244, 239, 239, 0.859);
}
.login-container h2 {
  text-align: center;
}
</style>
