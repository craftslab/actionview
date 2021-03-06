<template>
  <v-navigation-drawer
    app
    class="app--drawer"
    :mini-variant.sync="mini"
    v-model="drawer"
    :width="drawerWidth"
    :dark="$vuetify.dark"
  >
    <v-toolbar color="primary darken-1" dark>
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">ActionFlow</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-list class="pa-0">
      <template v-for="(item, key) in computeMenu">
        <template v-if="item.children && item.children.length > 0">
          <v-list-group :key="key" no-action :to="item.path">
            <template v-slot:prependIcon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" v-text="item.meta.icon" />
                </template>
                <span>
                  {{ $vuetify.lang.t('$vuetify.menu.' + item.meta.title) }}
                </span>
              </v-tooltip>
            </template>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="$vuetify.lang.t('$vuetify.menu.' + item.meta.title)"
                />
              </v-list-item-content>
            </template>
            <v-list-item
              :class="drawerWidth === 64 ? 'pl-4' : ''"
              v-for="subItem in item.children"
              :key="subItem.name"
              :to="subItem.path"
              v-show="!subItem.meta.hiddenInMenu"
            >
              <template v-if="drawerWidth === 64">
                <v-list-item-icon>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        v-text="subItem.meta.icon"
                      />
                    </template>
                    <span>{{
                        $vuetify.lang.t('$vuetify.menu.' + subItem.meta.title)
                      }}</span>
                  </v-tooltip>
                </v-list-item-icon>
              </template>
              <template v-else>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="
                      $vuetify.lang.t('$vuetify.menu.' + subItem.meta.title)
                    "
                  />
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-group>
        </template>
        <template v-else>
          <v-list-item
            :key="key"
            :to="item.path"
            v-show="!item.meta.hiddenInMenu"
          >
            <v-list-item-icon>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" v-text="item.meta.icon" />
                </template>
                <span>{{
                    $vuetify.lang.t('$vuetify.menu.' + item.meta.title)
                  }}</span>
              </v-tooltip>
            </v-list-item-icon>
            <v-list-item-content v-if="drawerWidth !== 64">
              <v-list-item-title
                v-text="$vuetify.lang.t('$vuetify.menu.' + item.meta.title)"
              />
            </v-list-item-content>
            <v-list-item-action v-if="item.meta.new">
              <v-icon color="green">mdi-new-box </v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </template>
    </v-list>
    <template v-slot:append>
      <div class="grey lighten-3">
        <template v-if="drawerWidth === 64">
          <div class="d-flex">
            <v-btn
              width="64"
              icon
              tile
              @click="handleDrawerCollapse"
              class="mx-auto"
            >
              <v-icon>mdi-arrow-collapse-right</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-else>
          <div class="d-flex">
            <v-spacer />
            <v-btn icon tile @click="handleDrawerCollapse" class="mr-2">
              <v-icon>mdi-arrow-collapse-left</v-icon>
            </v-btn>
          </div>
        </template>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { protectedRoute as routes } from '@/router/config'
export default {
  name: 'AppDrawer',
  components: {},
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mini: false,
      drawerWidth: 192,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      },
    }
  },
  computed: {
    computeLogo() {
      return '/static/m.png'
    },
    computeMenu() {
      return routes[0].children
    }
  },
  methods: {
    handleDrawerCollapse() {
      this.drawerWidth = this.drawerWidth === 192 ? 64 : 192
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="sass" scoped>
.app--drawer
  overflow: hidden !important
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
