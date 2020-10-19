<template>
  <v-card>
    <v-toolbar text dense flat>
      <v-toolbar-title>
        Pipeline
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col
        md="2"
      >
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-btn
        icon
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-data-table
        :headers="headers"
        :items="pipelines"
        hide-default-footer
        show-select
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            label
            outlined
            small
            :color="getColorByStatus(item.status)"
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.stage="{ item }">
            <v-stepper class="elevation-0">
              <v-stepper-header>
                <v-stepper-step
                  :complete="getCompleteByStage(item.stage) > 1"
                  step="1"
                >
                  <small>build</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="getCompleteByStage(item.stage) > 2"
                  step="2"
                >
                  <small>test</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="getCompleteByStage(item.stage) > 3"
                  step="3"
                >
                  <small>deploy</small>
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
        </template>
        <template v-slot:item.action="{ item }">
          <v-menu>
            <template v-slot:activator="{ on: menu }">
              <v-tooltip bottom>
                <template v-slot:activator="{}">
                  <v-btn icon v-on="{ ...menu }">
                    <v-icon>mdi-dots-vertical</v-icon></v-btn
                  >
                </template>
                <span>Action</span>
              </v-tooltip>
            </template>
            <v-list class="pa-0" dense>
              <v-list-item
                v-for="action in actions"
                :key="action.text"
                @click="action.click(item)"
              >
                <v-list-item-icon class="mr-2">
                  <v-icon small>{{ action.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ action.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
import { Pipelines } from '@/api/pipeline'
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name', align: 'left' },
        { text: 'Status', value: 'status' },
        { text: 'Stage', value: 'stage' },
        { text: 'Owner', value: 'owner' },
        { text: 'Time', value: 'time' },
        { text: 'Action', value: 'action', align: 'right' }
      ],
      actions: [
        { text: 'View', icon: 'mdi-eye', click: this.handleView },
        { text: 'Delete', icon: 'mdi-close', click: this.handleDelete }
      ],
      status: {
        fail: 'red',
        pass: 'green',
        running: 'blue'
      },
      stage: {
        build: 2,
        test: 3,
        deploy: 4
      }
    }
  },
  computed: {
    pipelines () {
      return Pipelines
    }
  },
  methods: {
    getColorByStatus(status) {
      return this.status[status]
    },
    getCompleteByStage(stage) {
      return this.stage[stage]
    }
  }
}
</script>
