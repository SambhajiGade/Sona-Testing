<template>
  <v-app>
    <!-- TEXT AOE AND THE IMAGE  -->

    <!-- TOOLBAR AND ITS ATTRIBUTES  -->

    <!-- <nav class="pa-2 mx-2">
      <v-toolbar dense flat color="blue darken-3"> -->

    <!-- <span class="mx-6 white--text font-weight-bold">COMPANIES</span>
        <span class="mx-6 white--text font-weight-bold">JOBS</span>
        <span class="mx-6 white--text font-weight-bold">CAREER</span> -->

    <!-- <v-spacer></v-spacer>

        <v-btn dark depressed flat class="blue darken-3 mr-5" @click.stop="dialog = true"> SIGN IN
        </v-btn> -->
    <!-- 


        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark depressed flat color="primary" v-bind="attrs" v-on="on">
              Register
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <v-btn flat depressed class="orange--text" to="register" >{{ item.title }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->

    <!-- </v-toolbar>
    </nav> -->

    <!-- POPUP WINDOW OF SIGN IN  -->

    <!-- <v-dialog dialog="true" max-width="400" > -->
    <v-card color="#90CAF9" width="400">
      <v-card-title> Welcome to Sona Testing </v-card-title>

      <!-- INPUT FEILDS  -->

      <v-card-text class="pb-2">
        <v-text-field label="Email" solo></v-text-field>

        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          solo
          class="input-group--focused"
          @click:append="show3 = !show3"
        ></v-text-field>
      </v-card-text>

      <!-- GOOGLE AND LINKED IN  -->

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="text-center text-h6">
        <b>OR</b>
      </v-card-text>

      <v-card-text class="text-center">
        <img src="../assets/google.png" alt="" width="60" height="50" />
        <img src="../assets/link.png" alt="" width="60" height="50" />
      </v-card-text>

      <!-- SIGN IN BUTTON  -->

      <v-card-actions class="justify-center">
        <v-btn
          flat
          dark
          color="blue darken-1 text-white px-10 mb-5"
          to="/Home/"
        >
          Sign In
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- </v-dialog> -->
  </v-app>
</template>

<!-- REQUIRED SCRIPTS  -->

<script>
export default {
  data() {
    return {
      dialog: true,
      items: [
        { title: "Institute" },
        { title: "Employer" },
        { title: "Student" },
      ],

      show3: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
};
</script>
