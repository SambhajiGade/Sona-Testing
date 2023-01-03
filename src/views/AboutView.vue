<template>
  <v-app>
    <!-- TEXT AOE AND THE IMAGE  -->

    <!-- <div class="text-center">
      <img src="../assets/prog.png" alt="" height="50" width="50" class="mt-2">
      <h3 class="my-2 blue--text"> AOE </h3>

    </div>
    <hr class="font-weight-bold mx-2"> -->

    <!-- TOOLBAR AND ITS ATTRIBUTES  -->

    <!-- 
    <nav class="pa-2 mx-2">
      <v-toolbar dense flat color="blue darken-3">

        <span class="mx-6 white--text font-weight-bold">COMPANIES</span>
        <span class="mx-6 white--text font-weight-bold">JOBS</span>
        <span class="mx-6 white--text font-weight-bold">CAREER</span>

        <v-spacer></v-spacer> -->

    <!-- <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark depressed flat color="primary" v-bind="attrs" v-on="on">
              Register
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <v-btn flat depressed class="orange--text">{{ item.title }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->

    <!-- </v-toolbar>
    </nav> -->

    <!-- ALERT  -->
    <!-- 
    <v-alert
      dense
      text
      type="success"
      class="mx-5"
    >
       <strong>Sign In Successsful </strong> 
    </v-alert> -->

    <div></div>

    <!-- 
    <v-btn color="primary" class="white--text" v-bind="attrs" v-on="on">
            <v-icon dark>mdi-plus</v-icon>Add
          </v-btn> -->

    <div class="text-left ml-10 mb-5">
      <v-dialog v-model="dialog" width="900">
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Click Me
          </v-btn> -->
          <v-btn color="primary" class="white--text" v-bind="attrs" v-on="on">
            <v-icon dark>mdi-plus</v-icon>Add
          </v-btn>

          <v-btn color="primary" class="white--text ml-3" to="register"
            >DASHBOARD</v-btn
          >
          <v-btn color="primary" class="white--text ml-3" @click="edit(selected1)" >EDIT</v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            ADD DATA HERE
          </v-card-title>

          <v-divider></v-divider>

          <!-- ---------------------------------------------------------------------------------------------------- -->

          <v-card-text>
            <div ma-0>
              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> GEAR PAIR </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Project"
                    :items="GearPair"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row
                class="text-center"
                justify="center"
                align="center"
                pa-0
                ma-0
                mt-0
              >
                <v-col cols="3" pa-0 ma-0>
                  <v-header class="font-weight-medium" pa-0 ma-0>
                    Differential Torque
                  </v-header>
                </v-col>

                <v-col cols="3" pa-0 ma-0>
                  <v-select
                    v-model="postdata.JJ01"
                    :items="items1"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> Application </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Column3"
                    :items="Application"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium" pa-0> STEPS </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Report"
                    :items="items"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
            <br /><br />

            <v-container>
              <!-- --------------------------------------------------------------------------------------------------- -->

              <div>
                <v-row>
                  <v-col cols="6">
                    <v-row justify="center">
                      <v-col cols="8" align="center" pt-0 ma-0>
                        <p class="font-weight-bold" mb-0 pa-0>GEAR</p>
                      </v-col>
                    </v-row>

                    <div>
                      <v-row align="center" justify="center">
                        <v-col cols="4" align="center">
                          <v-header align="center">MCS</v-header>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="postdata.Column5"
                            type="number"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Tensile Side
                          </p>
                        </v-col>
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Compression Side
                          </p>
                        </v-col>
                      </v-row>

                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column8"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column9"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column7"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column10"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column6"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column11"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <!-- <v-row align="center">
                          <v-col cols="8" align="center">
                            <v-btn depressed color="primary" @click="save1">
                              SAVE
                            </v-btn>
                          </v-col>
                        </v-row> -->
                      </div>
                    </div>
                  </v-col>

                  <!-- *************************************** -->

                  <v-col cols="6">
                    <div>
                      <v-row justify="center">
                        <v-col cols="8" align="center">
                          <p class="font-weight-bold" mb-0 pa-0>PINION</p>
                        </v-col>
                      </v-row>
                    </div>

                    <div>
                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4" align="center">
                            <v-header align="center">MCS</v-header>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              v-model="postdata.Column12"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row justify="center">
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Tensile Side
                            </p>
                          </v-col>
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Compression Side
                            </p>
                          </v-col>
                        </v-row>
                      </div>

                      <div>
                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column13"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column16"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column14"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column17"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column15"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column18"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>

            <div>
              <v-row justify="center">
                <v-col cols="3" align="center">
                  <v-text-field
                    label="Remark"
                    solo
                    dense
                    v-model="postdata.Column19"
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text class="ma-2 px-2" @click="dialog=false"> Cancel </v-btn>
            <v-btn color="primary" text @click="save1()" class="ma-2 px-2">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

<!-- ------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------------------------------- -->


<v-dialog v-model="dialog1" width="900">
  <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            UPDATE DATA HERE
          </v-card-title>

          <v-divider></v-divider>

          <!-- ---------------------------------------------------------------------------------------------------- -->

          <v-card-text>
            <div ma-0>
              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> GEAR PAIR </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="editdata.Project"
                    :items="GearPair"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row
                class="text-center"
                justify="center"
                align="center"
                pa-0
                ma-0
                mt-0
              >
                <v-col cols="3" pa-0 ma-0>
                  <v-header class="font-weight-medium" pa-0 ma-0>
                    Differential Torque
                  </v-header>
                </v-col>

                <v-col cols="3" pa-0 ma-0>
                  <v-select
                    v-model="editdata.JJ01"
                    :items="items1"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> Application </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="editdata.Column3"
                    :items="Application"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium" pa-0> STEPS </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="editdata.Report"
                    :items="items"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
            <br /><br />

            <v-container>
              <!-- --------------------------------------------------------------------------------------------------- -->

              <div>
                <v-row>
                  <v-col cols="6">
                    <v-row justify="center">
                      <v-col cols="8" align="center" pt-0 ma-0>
                        <p class="font-weight-bold" mb-0 pa-0>GEAR</p>
                      </v-col>
                    </v-row>

                    <div>
                      <v-row align="center" justify="center">
                        <v-col cols="4" align="center">
                          <v-header align="center">MCS</v-header>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="editdata.Column5"
                            type="number"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Tensile Side
                          </p>
                        </v-col>
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Compression Side
                          </p>
                        </v-col>
                      </v-row>

                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column8"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column9"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column7"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column10"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column6"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column11"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <!-- <v-row align="center">
                          <v-col cols="8" align="center">
                            <v-btn depressed color="primary" @click="save1">
                              SAVE
                            </v-btn>
                          </v-col>
                        </v-row> -->
                      </div>
                    </div>
                  </v-col>

                  <!-- *************************************** -->

                  <v-col cols="6">
                    <div>
                      <v-row justify="center">
                        <v-col cols="8" align="center">
                          <p class="font-weight-bold" mb-0 pa-0>PINION</p>
                        </v-col>
                      </v-row>
                    </div>

                    <div>
                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4" align="center">
                            <v-header align="center">MCS</v-header>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              v-model="editdata.Column12"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row justify="center">
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Tensile Side
                            </p>
                          </v-col>
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Compression Side
                            </p>
                          </v-col>
                        </v-row>
                      </div>

                      <div>
                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column13"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column16"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column14"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column17"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column15"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column18"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>

            <div>
              <v-row justify="center">
                <v-col cols="3" align="center">
                  <v-text-field
                    label="Remark"
                    solo
                    dense
                    v-model="editdata.Column19"
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text class="ma-2 px-2" @click="dialog1=false"> Cancel </v-btn>
            <v-btn color="primary" text @click="update()" class="ma-2 px-2">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
</v-dialog>

    </div>

    <!-- <v-card id="card1" > -->
    <!-- <v-data-table
      dense
      v-model="selected"
      :single-select="singleSelect"
      show-select
      :headers="headers"
      :items="SAM"
      item-key="name"
      class="elevation-1"
      mt-10
    >
   
  </v-data-table> -->

    <v-data-table
      v-model="selected1"
      :headers="headers"
      :items="SAM"
      :single-select="singleSelect1"
      item-key="id"
      show-select
      class="elevation-1"
    >
     
    
    </v-data-table>
    <!-- </v-card> -->
  </v-app>
</template>

<style>
#b1 {
  margin-left: 44%;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      select: { state: "" },
      items: ["GTPR", "PCD", "PTGR"],
      items1: [1000, 2000, 3000, 4000, 5000, 6000, 4500, 5500],

      GearPair: ["JJ01-A1B1"],

      Application: ["2Pinion"],

      singleSelect1: true,
      selected1: [],

     dialog:false,
     dialog1:false,

      SAM: [],

      postdata: {
        Project: "",
        JJ01: "",
        Column3: "",
        Report: "",
        Column5: "",
        Column6: "",
        Column7: "",
        Column8: "",
        Column9: "",
        Column10: "",
        Column11: "",
        Column12: "",
        Column13: "",
        Column14: "",
        Column15: "",
        Column16: "",
        Column17: "",
        Column18: "",
        Column19: "",
      },

      editdata: {
        Project: "",
        JJ01: "",
        Column3: "",
        Report: "",
        Column5: "",
        Column6: "",
        Column7: "",
        Column8: "",
        Column9: "",
        Column10: "",
        Column11: "",
        Column12: "",
        Column13: "",
        Column14: "",
        Column15: "",
        Column16: "",
        Column17: "",
        Column18: "",
        Column19: "",
      },

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
        },
        {
          text: "Diffrential \nTorque",
          value: "JJ01",
          filter: this.DTFilter,
        },
        { text: "Application", value: "Column3" },
        { text: "Step", value: "Report" },
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
      ];
    },
  },
  mounted() {
    this.getapicall();

  },
  methods: {
    async getapicall() {
      console.log("previous postdata : ", this.postdata);

      await axios
        .get("http://localhost:3000/DATA1")
        .then((resp) => {
          this.SAM = resp.data;
          console.log("this.sam : ", this.SAM);
          console.log("selected array : ",this.selected1)
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    async save1() {
      // console.log("old Sam : ", this.SAM);

      // let card2=document.getElementById("card1");

      // card2.style.visibility="visible";
      
      this.dialog = false;

      
      console.log("UPdated postdata : ", this.postdata);

      console.log("mcs postdata : ", this.postdata.Column5);

      console.log("next8 postdata : ", this.postdata.Column8);

      console.log("next9 postdata : ", this.postdata.Column9);

      await axios
        .post("http://localhost:3000/DATA1", this.postdata)
        .then((result) => {
          console.log("Result : ", result);

          (this.postdata.Column5 = null),
            (this.postdata.Column6 = null),
            (this.postdata.Column7 = null),
            (this.postdata.Column8 = null),
            (this.postdata.Column9 = null),
            (this.postdata.Column10 = null),
            (this.postdata.Column11 = null),
            (this.postdata.Column12 = null),
            (this.postdata.Column13 = null),
            (this.postdata.Column14 = null),
            (this.postdata.Column15 = null),
            (this.postdata.Column16 = null),
            (this.postdata.Column17 = null),
            (this.postdata.Column18 = null),
            (this.postdata.Column19 = null);

          // this.postdata={}
          this.getapicall();

          console.log("data inserted : ", this.SAM);
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    edit(inputd){

      this.editdata=inputd[0];
      this.dialog1=true;
console.log("input selected : ",this.editdata.id);
console.log("editdata selected : ",this.editdata);
    },

    async update(){
      this.dialog1=false;
console.log("edited data in update : ",this.editdata)

await axios.put("http://localhost:3000/DATA1/"+this.editdata.id,this.editdata).then((resp)=>{
  console.log(resp);
  this.getapicall();
}).catch((err)=>{
  console.log("Error : ",err);
})

    }
  },
};
</script>
