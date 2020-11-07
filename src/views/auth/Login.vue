<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <h1 class="primary--text display-1 page-login_title">
              ActionFlow
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              class="my-10"
              lazy-validation
              v-model="formValid"
            >
              <v-text-field
                append-icon="mdi-email"
                autocomplete="off"
                name="login"
                :label="$vuetify.lang.t('$vuetify.username')"
                :placeholder="$vuetify.lang.t('$vuetify.username')"
                type="text"
                required
                outlined
                :rules="formRule.username"
                v-model="formModel.username"
              />
              <v-text-field
                append-icon="mdi-lock"
                autocomplete="off"
                name="password"
                :label="$vuetify.lang.t('$vuetify.password')"
                :placeholder="$vuetify.lang.t('$vuetify.password')"
                type="password"
                :rules="formRule.password"
                required
                outlined
                v-model="formModel.password"
                v-on:keyup.enter="login"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-tooltip v-for="item in hostIcons" :key="item.text" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mr-3"
                  v-text="item.icon"
                  v-bind="attrs"
                  v-on="on"
                  @click="handleHostLogin"
                />
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
            <v-spacer />
            <v-btn large tile color="primary" @click="login" :loading="loading">
              {{ $vuetify.lang.t('$vuetify.login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: null,
        password: null
      },
      formRule: {
        username: [
          (v) =>
            !!v || this.$vuetify.lang.t('$vuetify.rule.required', ['username'])
        ],
        password: [
          (v) =>
            !!v || this.$vuetify.lang.t('$vuetify.rule.required', ['password'])
        ]
      },
      hostIcons: [
        {
          text: 'Bitbucket',
          icon: 'mdi-bitbucket'
        },
        {
          text: 'GitHub',
          icon: 'mdi-github'
        },
        {
          text: 'GitLab',
          icon: 'mdi-gitlab'
        },
      ]
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('login', this.formModel)
          .then(() => {
            this.loading = false
            this.$router.push('/dashboard')
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    handleHostLogin() {}
  }
}
</script>

<style lang="sass" scoped>
.page-login
  max-width: 600px
  margin: 0 auto
</style>
