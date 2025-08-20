<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer />
      <v-btn text to="/">Home</v-btn>
      <v-menu offset-y>
        <template #activator="{ props }">
          <v-btn text v-bind="props">About Me <v-icon right>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item href="#about-me">
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item>
          <v-list-item href="#work-experience">
            <v-list-item-title>Work Experience</v-list-item-title>
          </v-list-item>
          <v-list-item href="#education">
            <v-list-item-title>Education</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template #activator="{ props }">
          <v-btn text v-bind="props">Publications <v-icon right>mdi-menu-down</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item :to="{ path: '/publications', hash: '' }">
            <v-list-item-title>All</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/publications', hash: '#journal' }">
            <v-list-item-title>Journal</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/publications', hash: '#conference' }">
            <v-list-item-title>Conference</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/publications', hash: '#patents' }">
            <v-list-item-title>Patents</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app class="footer-copyright" height="auto">
      <div class="footer-content">
        <div class="footer-declaration">
          <div class="footer-declaration-title-row">
            <div class="footer-declaration-title">© 2025 August F.Y. Chao. All rights reserved. ---不自殺宣言---</div>
            <span class="footer-triangle" @click="showDeclaration = !showDeclaration" :aria-expanded="showDeclaration" tabindex="0" role="button" title="顯示/隱藏宣言">▲</span>
          </div>
          <div v-if="showDeclaration" class="footer-declaration-body">
            本人生性樂觀開朗，近期至未來至耳順之年人生規劃，後事遺書也都已妥當。雖交友並不廣闊，唯幸身無隱疾，且家中尚有父母、外婆、老婆、阿布及 Do-Co-Mo 需奉養、照料，絕無任何自殺輕生之意圖。近期也未規劃前往外地旅遊踏青，雖生活作息幾許不正常，但也無進出聲色不正當場所。偶入冬時會接觸木炭，且時時注意撲滅。毒藥不碰，槍砲彈藥等危險管制物品，自退伍即不再接觸。若是本人被發現死亡，且現場無外力及打鬥掙扎痕跡，如在車內房間等等隱蔽場所，絕非本人自殺。另本人非常遵守交通法規，絕不於酒後駕駛動力交通工具或是超速行駛，若近期發生交通事故，定為有心人士所為。此外研究工作雖有壓力，但師長仍時時關心找我 meeting，尚不足成為自殘因素。<br>
            謹此宣告絕不自殺 絕不自找意外。
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showDeclaration: false
    }
  }
}
</script>

<style scoped>
.v-application {
  font-family: 'Noto Sans TC', 'Roboto', Arial, sans-serif;
}
.footer-copyright {
  background: #f9f8f6;
  color: #333;
  padding: 1.2rem 0 0.5rem 0;
  border-top: 1.5px solid #d1c7b7;
  font-size: 8pt;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-content {
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
.footer-declaration-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.footer-declaration-title {
  font-weight: bold;
  margin-top: 0.7em;
  margin-bottom: 0.2em;
  cursor: pointer;
  display: inline-block;
}
.footer-triangle {
  font-size: 1.1em;
  color: #bfa14a;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s;
  margin-top: 0.7em;
}
.footer-triangle:hover, .footer-triangle:focus {
  color: #1a237e;
}
.footer-declaration-body {
  font-size: 8pt;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5em;
  transition: opacity 0.2s;
}
</style>
