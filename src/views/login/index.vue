<template>
  <div class="login_wrap">
    <!-- 目录 -->
    <el-radio-group v-model="isLogin" style="margin-bottom: 20px;">
      <el-radio-button :label="true">登录</el-radio-button>
      <el-radio-button :label="false">注册</el-radio-button>
    </el-radio-group>
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="username">
        <label>用户名</label>
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <label>密码</label>
        <el-input type="password" v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <label>验证码</label>
        <el-row :gutter='11'>
          <el-col :span='12'>
            <el-input v-model="ruleForm.code"></el-input>
          </el-col>
          <el-col :span="12">
            <el-button type="primary">获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      isLogin: true,
      ruleForm: {
        username:'',
        pwd: '',
        code:'',
      },
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
        ],
        pwd:[
          {required:true,message:'请输入密码',trigger:'blur'},
        ],
        code:[
          {required:true,message:'请输入验证码',trigger:'blur'},
        ]
      }
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="scss">
.login_wrap {
  width: 330px;
  height: 100vh;
  margin: 20px auto;
}
</style>
