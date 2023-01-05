<template>
  <v-app>
    <v-row class="mt-8" justify="center">
      <v-col cols="2" class="pa-0">
        <v-select
          :items="DTList"
          v-model="DTFilterValue"
          label="Gear Pair"
          class="pa-0 ml-4"
          @change="selectedI()"
        ></v-select>
      </v-col>

      <v-btn color="primary" class="white--text ml-3" to="/Home"
        >HOME</v-btn
      >
    </v-row>

    <body class="mt-5 ml-1">
      <!-- <hr /> -->
      <table id="table1" cellspacing="0" border="1">
        <tbody>
          <tr>
            <td
              rowspan="2"
              style="
                text-align: center;
                width: 12%;
                border: 1px solid black;
                background-color: #d5d8dc;
              "
            >
              Title
            </td>
            <td
              rowspan="2"
              style="
                text-align: center;
                width: 12%;
                border: 1px solid black;
                background-color: #d5d8dc;
              "
            >
              GEAR PAIR
            </td>
            <td
              rowspan="2"
              style="
                text-align: center;
                width: 12%;
                border: 1px solid black;
                background-color: #d5d8dc;
              "
            >
              Differential Torque
            </td>
            <td
              colspan="3"
              style="
                text-align: center;
                width: 27%;
                border: 1px solid black;
                background-color: #d5d8dc;
              "
            >
              Max Stress Gear (Mpa)
            </td>
            <td
              colspan="3"
              style="
                text-align: center;
                width: 27%;
                border: 1px solid black;
                background-color: #d5d8dc;
              "
            >
              Max Stress Pinion (Mpa)
            </td>
          </tr>
          <tr id="row2">
            <td
              style="
                text-align: center;
                background-color: #d5d8dc;
                min-width: 100px;
              "
            >
              <u> Contact Stress </u>
            </td>
            <td
              style="
                text-align: center;

                background-color: #d5d8dc;
                min-width: 100px;
              "
            >
              <u> Bending Stress Tensile </u>
            </td>
            <td
              style="
                text-align: center;

                background-color: #d5d8dc;
                min-width: 100px;
              "
            >
              <u> Bending Stress Compressive </u>
            </td>
            <td
              style="
                text-align: center;

                background-color: #d5d8dc;
                min-width: 100px;
              "
            >
              <u> Contact Stress </u>
            </td>
            <td
              style="
                text-align: center;

                background-color: #d5d8dc;
                min-width: 100px;
              "
            >
              <u> Bending Stress Tensile </u>
            </td>
            <td
              style="
                text-align: center;

                background-color: #d5d8dc;
                min-width: 100px;
              "
            >
              <u> Bending Stress Compressive </u>
            </td>
          </tr>
          <tr>
            <td
              id="a"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="b"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="c"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="d"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="e"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="f"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="g"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="h"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
            <td
              id="i"
              style="
                text-align: center;
                background-color: rgb(158, 185, 244);
                min-width: 100px;
              "
            ></td>
          </tr>
        </tbody>
      </table>
      <!-- <hr /> -->
    </body>

    <v-card>
      <div
        id="chartContainer1"
        style="height: 300px; width: 45%; display: inline-block"
      ></div>
      <div
        id="chartContainer2"
        style="height: 300px; width: 45%; display: inline-block"
      ></div>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";

var CanvasJS = require("./canvasjs.min.js");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export default {
  data() {
    return {
      SAM: [],
      DTList: [
        // { text: "All", value: null },

        { text: "JJ01-A1B1", value: "JJ01-A1B1" },
        { text: "JJ01-A1B2", value: "JJ01-A1B2" },
        { text: "JJ01-A1B3", value: "JJ01-A1B3" },
        { text: "JJ01-A1B4", value: "JJ01-A1B4" },
      ],

      // Filter models.

      DTFilterValue: this.$route.params.Project,
    };
  },

  mounted() {
    this.getapicall();
    // this.Sambhaji();
  },
  methods: {

selectedI(){
console.log("selected item is : ", this.DTFilterValue)
this.getapicall();
},

    async getapicall() {
      //  fetch('http://localhost:3000/database1')
      //  .then(res=>res.json())
      //  .then(d =>this.SAM=d)
      //  .catch(err=>console.log(err.message))
      //  console.log("I am in geetaiicall")

      console.log("previous postdata : ", this.postdata);

      await axios
      .get("http://localhost:3000/DATA1?Project="+this.DTFilterValue)
        .then((resp) => {
          this.SAM = resp.data;
          console.log("this.sam : ", this.SAM);
  // this.DTFilterValue=""
          this.Sambhaji();
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    Sambhaji() {
      let Data = [];
      // let table2=document.getElementById("table1");
      //   table2.style.visibility="visible";

      //       let Row1 = document.getElementById("row1")
      //       let Row2 = document.getElementById("row2")

      // Row1.style.visibility="visible";
      // Row2.style.visibility="visible";

      document.getElementById("a").innerHTML = "";
      document.getElementById("b").innerHTML = "";
      document.getElementById("c").innerHTML = "";
      document.getElementById("d").innerHTML = "";
      document.getElementById("e").innerHTML = "";
      document.getElementById("f").innerHTML = "";
      document.getElementById("g").innerHTML = "";
      document.getElementById("h").innerHTML = "";
      document.getElementById("i").innerHTML = "";

      console.log("SAM : ", this.SAM);
      let SAMG = this.SAM;
      console.log("SAMG : ", SAMG);
      // this.condition1=true
      let B1 = false;
      let B2 = false;
      let B3 = false;

      let Array = [];
      let A = 0;

      for (let i = 0; i < SAMG.length; i = i + 3) {
        let t = i;

        let obj1 = SAMG[t];

        let obj2 = SAMG[t + 1];

        let obj3 = SAMG[t + 2];

        let arr3 = [];
        let arr2 = [];
        let arr1 = [];

        let l = 0;
        let m = 0;
        let n = 0;

        for (let key1 in obj1) {
          if (key1 == "Column6") {
            B1 = true;
          }

          if (key1 == "Column19") {
            B1 = false;
          }

          if (B1) {
            if (key1 == "Column12" || key1 == "Column19" || key1 == "id") {
              console.log("");
            } else {
              arr1[l] = obj1[key1];

              l++;
            }
          }
        }

        for (let key2 in obj2) {
          if (key2 == "Column6") {
            B2 = true;
          }

          if (key2 == "Column19") {
            B2 = false;
          }

          if (B2) {
            if (key2 == "Column12" || key2 == "Column19" || key2 == "id") {
              console.log();
            } else {
              arr2[m] = obj2[key2];

              m++;
            }
          }
        }

        for (let key3 in obj3) {
          if (key3 == "Column6") {
            B3 = true;
          }

          if (key3 == "Column19") {
            B3 = false;
          }

          if (B3) {
            if (key3 == "Column12" || key3 == "Column19" || key3 == "id") {
              console.log();
            } else {
              arr3[n] = obj3[key3];

              n++;
            }
          }
        }

        let Arr1 = [];

        for (let e = 0; e < arr1.length; e += 3) {
          let g = 0;
          for (let f = e; f < e + 3; f++) {
            Arr1[g] = arr1[f];
            g++;
            Arr1[g] = arr2[f];
            g++;
            Arr1[g] = arr3[f];
            g++;
          }

          let IntArr1 = Arr1.sort((a, b) => {
            return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
          });

          Array[A] = IntArr1[IntArr1.length - 1];
          A++;
        }
      }

      let mcs1 = [];
      let mcs2 = [];
      let m1 = [];
      let m2 = [];

      let y = 0;
      let z = 0;
      let my = 0;
      let mz = 0;

      for (let i = 0; i < SAMG.length; i++) {
        if (y < 3) {
          m1[y] = SAMG[i].Column5;
          y++;
        } else {
          y = 0;

          m1.sort();

          mcs1[my] = m1[m1.length - 1];
          my++;
          i--;
        }

        if (z < 3) {
          m2[z] = SAMG[i].Column12;
          z++;
        } else {
          z = 0;
          m2.sort();

          mcs2[mz] = m2[m2.length - 1];
          mz++;
        }
      }

      m1 = m1.sort((a, b) => {
        return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      });
      mcs1[my] = m1[m1.length - 1];

      m2 = m2.sort((a, b) => {
        return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      });
      mcs2[mz] = m2[m2.length - 1];

      let cs = 0;
      let bsc = 0;

      let pointer = 0;
      for (let i1 = 0; i1 < SAMG.length; i1 += 3) {
        let gp = SAMG[i1].Project;
        let dt = SAMG[i1].JJ01;
        let title = gp + " @" + dt;

        let cs1 = mcs1[cs];
        let cs2 = mcs2[cs];
        cs++;

        let bsc1 = Array[bsc];
        let bsc2 = Array[bsc + 1];
        let bsc3 = Array[bsc + 2];
        let bsc4 = Array[bsc + 3];
        bsc += 4;

        let dataArray = [];
        dataArray[0] = title;
        dataArray[1] = gp;
        dataArray[2] = dt;
        dataArray[3] = cs1;
        dataArray[4] = bsc1;
        dataArray[5] = bsc2;
        dataArray[6] = cs2;
        dataArray[7] = bsc3;
        dataArray[8] = bsc4;

        Data[pointer] = dataArray;
        pointer++;
      }

      console.log("main Data : ", Data);
      for (let i = 0; i < Data.length; i++) {
        document.getElementById("a").innerHTML += Data[i][0] + "</br>";
        document.getElementById("b").innerHTML += Data[i][1] + "</br>";
        document.getElementById("c").innerHTML += Data[i][2] + "</br>";
        document.getElementById("d").innerHTML += Data[i][3] + "</br>";
        document.getElementById("e").innerHTML += Data[i][4] + "</br>";
        document.getElementById("f").innerHTML += Data[i][5] + "</br>";
        document.getElementById("g").innerHTML += Data[i][6] + "</br>";
        document.getElementById("h").innerHTML += Data[i][7] + "</br>";
        document.getElementById("i").innerHTML += Data[i][8] + "</br>";
      }

      Data.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

      let index = 0;
      let man1 = [];
      let man2 = [];
      let man3 = [];
      let man4 = [];
      for (let g = 0; g < Data.length; g++) {
        man1[index] = Data[g][4];
        man2[index] = Data[g][5];
        man3[index] = Data[g][7];
        man4[index] = Data[g][8];
        index++;
      }

      // mcs1 = mcs1.sort((a, b) => {
      //   return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      // });
      // man1 = man1.sort((a, b) => {
      //   return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      // });
      // man2 = man2.sort((a, b) => {
      //   return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      // });

      // mcs2 = mcs2.sort((a, b) => {
      //   return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      // });
      // man3 = man3.sort((a, b) => {
      //   return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      // });
      // man4 = man4.sort((a, b) => {
      //   return Number(a) < Number(b) ? -1 : Number(a) > Number(b) ? 1 : 0;
      // });

      let s1 = mcs1.map((i) => Number(i));
      let s2 = man1.map((i) => Number(i));
      let s3 = man2.map((i) => Number(i));
      let s4 = mcs2.map((i) => Number(i));
      let s5 = man3.map((i) => Number(i));
      let s6 = man4.map((i) => Number(i));

      let SambhajiGade1 = [];
      let SambhajiGade2 = [];
      for (let z = 0; z < man1.length; z++) {
        SambhajiGade1.push({
          type: "column",
          name: Data[z][0],

          legendText: Data[z][0],
          showInLegend: true,
          dataPoints: [
            { label: "Contact..", y: s1[z] },
            { label: "Bending..", y: s2[z] },
            { label: "Bending..", y: s3[z] },
          ],
        });
      }

      for (let z = 0; z < man1.length; z++) {
        SambhajiGade2.push({
          type: "column",
          name: Data[z][0],
          legendText: Data[z][0],
          showInLegend: true,
          dataPoints: [
            { label: "Contact..", y: s4[z] },
            { label: "Bending..", y: s5[z] },
            { label: "Bending..", y: s6[z] },
          ],
        });
      }

      console.log("DataArray : ", Data);
      var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        title: {
          text: "Von-Mises Stress-Gear",
        },
        axisY: {
          title: "Max Stress(mpa)",
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },

        toolTip: {
          shared: true,
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries,
        },
        data: SambhajiGade1,
        // data: [
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @2000",
        //     legendText: "JJ01-A1B1 @2000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[0] },
        //       { label: "Bending..", y: s2[0] },
        //       { label: "Bending..", y: s3[0] },
        //     ],
        //   },
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @3000",
        //     legendText: "JJ01-A1B1 @3000",
        //     // axisYType: "secondary",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[1] },
        //       { label: "Bending..", y: s2[1] },
        //       { label: "Bending..", y: s3[1] },
        //     ],
        //   },

        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @4000",
        //     legendText: "JJ01-A1B1 @4000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[2] },
        //       { label: "Bending..", y: s2[2] },
        //       { label: "Bending..", y: s3[2] },
        //     ],
        //   },
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @4500",

        //     legendText: "JJ01-A1B1 @4500",
        //     // axisYType: "secondary",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[3] },
        //       { label: "Bending..", y: s2[3] },
        //       { label: "Bending..", y: s3[3] },
        //     ],
        //   },

        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @5000",

        //     legendText: "JJ01-A1B1 @5000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[4] },
        //       { label: "Bending..", y: s2[4] },
        //       { label: "Bending..", y: s3[4] },
        //     ],
        //   },
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @5500",

        //     legendText: "JJ01-A1B1 @5500",
        //     // axisYType: "secondary",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[5] },
        //       { label: "Bending..", y: s2[5] },
        //       { label: "Bending..", y: s3[5] },
        //     ],
        //   },

        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @6000",
        //     legendText: "JJ01-A1B1 @6000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s1[6] },
        //       { label: "Bending..", y: s2[6] },
        //       { label: "Bending..", y: s3[6] },
        //     ],
        //   },
        // ],
      });
      chart.render();

      function toggleDataSeries(e) {
        if (
          typeof e.dataSeries.visible === "undefined" ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }

      var chart1 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        title: {
          text: "Von-Mises Stress-Pinion",
        },
        axisY: {
          title: "Max Stress(mpa)",
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
        },

        toolTip: {
          shared: true,
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries1,
        },

        data: SambhajiGade2,

        // data: [
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @2000",
        //     legendText: "JJ01-A1B1 @2000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[0] },
        //       { label: "Bending..", y: s5[0] },
        //       { label: "Bending..", y: s6[0] },
        //     ],
        //   },
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @3000",
        //     legendText: "JJ01-A1B1 @3000",
        //     // axisYType: "secondary",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[1] },
        //       { label: "Bending..", y: s5[1] },
        //       { label: "Bending..", y: s6[1] },
        //     ],
        //   },

        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @4000",
        //     legendText: "JJ01-A1B1 @4000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[2] },
        //       { label: "Bending..", y: s5[2] },
        //       { label: "Bending..", y: s6[2] },
        //     ],
        //   },
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @4500",

        //     legendText: "JJ01-A1B1 @4500",
        //     // axisYType: "secondary",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[3] },
        //       { label: "Bending..", y: s5[3] },
        //       { label: "Bending..", y: s6[3] },
        //     ],
        //   },

        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @5000",

        //     legendText: "JJ01-A1B1 @5000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[4] },
        //       { label: "Bending..", y: s5[4] },
        //       { label: "Bending..", y: s6[4] },
        //     ],
        //   },
        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @5500",

        //     legendText: "JJ01-A1B1 @5500",
        //     // axisYType: "secondary",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[5] },
        //       { label: "Bending..", y: s5[5] },
        //       { label: "Bending..", y: s6[5] },
        //     ],
        //   },

        //   {
        //     type: "column",
        //     name: "JJ01-A1B1 @6000",
        //     legendText: "JJ01-A1B1 @6000",
        //     showInLegend: true,
        //     dataPoints: [
        //       { label: "Contact..", y: s4[6] },
        //       { label: "Bending..", y: s5[6] },
        //       { label: "Bending..", y: s6[6] },
        //     ],
        //   },
        // ],
      });
      chart1.render();

      function toggleDataSeries1(e) {
        if (
          typeof e.dataSeries.visible === "undefined" ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart1.render();
      }
    },
  },
};
</script>
