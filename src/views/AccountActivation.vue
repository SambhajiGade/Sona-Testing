<template>
  <v-app>
    <v-row class="ma-8" justify="inline">
      <v-btn color="primary" class="white--text" to="/Data">
        <v-icon dark>mdi-plus</v-icon>Add
      </v-btn>
      <v-col cols="2" class="pa-0">
        <v-select
          :items="DTList"
          v-model="DTFilterValue"
          label="Gear Pair"
          class="pa-0 ml-4"
          @change="selectedItm()"
        ></v-select>
      </v-col>

      <v-btn color="primary" class="white--text ml-3" @click="dash1()" 
        >DASHBOARD</v-btn
      >
    </v-row>
  </v-app>
</template>

<script>

// import router from "vue-router"

export default {

  
  data() {
    return {
      DTList: [
        // { text: "All", value: null },

        { text: "JJ01-A1B1", value: "JJ01-A1B1" },
        { text: "JJ01-A1B2", value: "JJ01-A1B2" },
        { text: "JJ01-A1B3", value: "JJ01-A1B3" },
        { text: "JJ01-A1B4", value: "JJ01-A1B4" },
      ],

      path1:"/Dashboard/ ",
      path2:'/Dashboard/',
      checkpointer:false,


      // Filter models.

      DTFilterValue: null,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Gear Pair",
          align: "left",
          sortable: false,
          value: "Project",
          filter: this.DTFilter,
          // filter: this.nameFilter,
        },
        {
          text: "Diffrential \nTorque",
          value: "JJ01",
        },

        { text: "Application", value: "Column3" },
        { text: "Step", value: "FEA Report" },
        { text: "MCS", value: "Column5" },
        { text: "Rib (MBS)", value: "Column6" },
        { text: "Root (MBS)", value: "Column7" },
        { text: "Web (MBS)", value: "Column8" },
        { text: "Rib (MBS)", value: "Column9" },
        { text: "Root (MBS)", value: "Column10" },
        { text: "Web (MBS)", value: "Column11" },
        { text: "MCS", value: "Column12" },
        { text: "Rib (MBS)", value: "Column13" },
        { text: "Root (MBS)", value: "Column14" },
        { text: "Web (MBS)", value: "Column15" },
        { text: "Rib (MBS)", value: "Column16" },
        { text: "Root (MBS)", value: "Column17" },
        { text: "Web (MBS)", value: "Column18" },
        { text: "Remarks", value: "Column19" },
        { text: "Actions", value: "actions", sortable: false, width: "100px" },
      ];
    },
  },

  methods: {
    /**
     * Filter for calories column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    DTFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.DTFilterValue) {
        // console.log("caloriesfitltervalue : ", this.DTFilterValue);
        // console.log("Data : ",this.Data)
        // console.log("data.jj01 : ", this.Data[0].JJ01);
        return true;
      }
      // console.log("caloriesfitltervalue : ", this.Data[0].JJ01);
      // console.log("value : ", value);

      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value == this.DTFilterValue;
    },


    selectedItm(){
        console.log("Selected item is in method : ",this.DTFilterValue)
        this.path2=this.path2+this.DTFilterValue;
        this.checkpointer=true;
    },
    dash1(){
        console.log("dashboard clicked : ",this.path1);
        console.log("updatated path is : ",this.path2);
        if(this.checkpointer){
            this.$router.push(this.path2)
        }else{

            this.$router.push(this.path1)
        }

    }
  },
};
</script>
