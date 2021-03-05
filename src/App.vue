<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0;margin: 0" height="47px">
        <Layout></Layout>
      </el-header>
      <el-container>
        <el-aside style="padding: 0;margin: 0" width="185px">
          <Nav></Nav>
        </el-aside>
        <el-main style="padding: 0px;margin: 0;">
          <transition>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Layout from "./components/head/Layout";
  import Nav from "./components/aside/Nav";
  export default {
    name:'App',
    components:{
      Layout,Nav
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background-image: url("./assets/entirety/background.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 1366px;
  }

</style>
