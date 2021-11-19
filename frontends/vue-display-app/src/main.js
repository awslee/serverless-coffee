/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

'use strict'

import { createApp } from 'vue'
import App from './App.vue'

// Theming framework
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

// Global event bus
import mitt from 'mitt'
const emitter = mitt()

// Amplify imports
import Amplify from 'aws-amplify'

// Phone number handling
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

Amplify.configure({
  Auth: {
    region: '<< ENTER YOUR VALUE >>',
    identityPoolRegion: '<< ENTER YOUR VALUE >>',
    userPoolId: '<< ENTER YOUR VALUE >>',
    userPoolWebClientId: '<< ENTER YOUR VALUE >>',
    mandatorySignIn: false,
    authenticationFlowType: 'CUSTOM_AUTH',
  }
})

const app = createApp(App).use(  VuesticPlugin,{
  components: {
    VaChip: {
      outline: true,
      rounded: false,
      size: 'large',
      color: '#000'
    },
    VaCard:{
      stripe: false,
      stripeColor:"black",
      square: false
    },
    VaButton:{
      color:"#08c18a"
    },

    VaButtoGroup:{
      color:"#08c18a"
    }
  },
}).use(VueTelInput)
app.config.globalProperties.emitter = emitter

/* ===================================================
                      CONFIGURATION
    You must add your own values here! See the tutorial
    in the GitHub repo for more information. @jbesw
   =================================================== */

app.config.globalProperties.$appLogo = 'https://assets.serverlesscoffee.com/images/serverlesspresso-large.png'

// ** Backend config **
// API Gateway endpoint - e.g. https://abc123abc.execute-api.us-east-1.amazonaws.com
app.config.globalProperties.$appName = 'Validator'
app.config.globalProperties.$APIurl = '<< ENTER YOUR VALUE >>'
app.config.globalProperties.$region = '<< ENTER YOUR VALUE >>'

app.config.globalProperties.$ordersAPIurl = '<< ENTER YOUR VALUE >>'
app.config.globalProperties.$APIconfigURL = '<< ENTER YOUR VALUE >>'

// ** Websocket connection **
//  PoolId: Retrieve this with the CLI command: aws cognito-identity list-identity-pools --max-results 10 --region <<REGION>>
app.config.globalProperties.$poolId = '<< ENTER YOUR VALUE >>' // 'YourCognitoIdentityPoolId'
//  IoTendpoint: Retrieve this with the CLI command: aws iot describe-endpoint --endpoint-type iot:Data-ATS --region us-west-2
app.config.globalProperties.$host = '<< ENTER YOUR VALUE >>' // 'YourAwsIoTEndpoint', e.g. 'prefix.iot.us-east-1.amazonaws.com'
app.config.globalProperties.$region = '<< ENTER YOUR VALUE >>'
app.config.globalProperties.$adminApp = true

// ** readonly config store endpoint **
app.config.globalProperties.$ConfigEndpoint = '<< ENTER YOUR VALUE >>'

app.mount('#app')