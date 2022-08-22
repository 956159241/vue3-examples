<template>
    <div>
        <h1>Message</h1>
        <input v-model="value" />
        <div> Encryption Value: {{ encryptionValue }} </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CryptoJS from 'crypto-js';

const value = ref('');
const encryptionValue = ref('');

watch(value, (newVal) => {
    encryptionValue.value = Encrypt(newVal);
});

const key = CryptoJS.enc.Utf8.parse("1234567890000000");
const iv = CryptoJS.enc.Utf8.parse("1234567890000000");

//**************************************************************
//*字符串/对象加密
//*   0：需要解密的字符串或对象
//****************************************************************/
function Encrypt(o) {
   if (typeof (o) === "string") {
        if (o) {
            const srcs = CryptoJS.enc.Utf8.parse(o);
            return CryptoJS.AES.encrypt(srcs, key, {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString();
        }
    }
    else if (typeof (o) === "object") {
        for (const _o in o) {
            if (o[_o]) {
                const srcs = CryptoJS.enc.Utf8.parse(o[_o]);
                o[_o] = CryptoJS.AES.encrypt(srcs, key, {
                    keySize: 128 / 8,
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString();
            }
        }

    }
    return o;
}

//**************************************************************
//*字符串解密
//*   str：需要解密的字符串
//****************************************************************/
function Decrypt(str:any) {
   const decrypt = CryptoJS.AES.decrypt(str, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr;
}
</script>

<script lang="ts">
export default { naem: 'demo1' };
</script>
