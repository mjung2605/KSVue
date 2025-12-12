<template>
    <v-container fluid class="pa-0 h-screen">

        <v-img src="/public/kathi_sideview.jpg" class="h-100" style="position: relative;" cover>

            <!-- Kurve Oben -->
            <div class="custom-shape-divider-top-1765547159">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

            <!-- Kurve Unten -->
            <div class="custom-shape-divider-bottom-1765546642">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <UiTabs />
        </v-img>
    </v-container>
</template>

<style scoped>
    .custom-shape-divider-bottom-1765546642 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-bottom-1765546642 svg {
        position: relative;
        display: block;
        width: calc(177% + 1.3px);
        height: 78px;
    }

    .custom-shape-divider-bottom-1765546642 .shape-fill {
        fill: #fff3f3;
    }    

    .custom-shape-divider-top-1765547159 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-top-1765547159 svg {
        position: relative;
        display: block;
        width: calc(121% + 1.3px);
        height: 46px;
    }

    .custom-shape-divider-top-1765547159 .shape-fill {
        fill: #FFF3F3;
    }
</style>
