<template>
  <v-container class="pt-16 mt-16">
    <v-card style="background-color: rgba(var(--v-theme-background), 0.8);">
      <v-tabs v-model="tab" align-tabs="center" bg-color="background">
        <v-tab value="audios">Hörproben</v-tab>
        <!-- 
        <v-tab value="videos">Voice Over</v-tab>
        <v-tab value="podcasts">Podcasts</v-tab>
         -->
      </v-tabs>

      <v-card-text>
        <v-container style="max-width: 700px; min-height: 300px;">
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="audios">
              <UiTabAudios />
            </v-tabs-window-item>

            <!--
            <v-tabs-window-item value="videos">
              <UiTabVideos />
            </v-tabs-window-item>

            <v-tabs-window-item value="podcasts">
              <UiTabPodcasts />
            </v-tabs-window-item>
            -->
          </v-tabs-window>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      tab: 'null',
    })

  }


</script>