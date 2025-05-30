<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        variant="solo"
                        v-model="firstname"
                        :rules="textRules"
                        label="Vorname"
                        required>       
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                        variant="solo"
                        v-model="lastname"
                        :rules="textRules"
                        label="Nachname"
                        required>       
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        variant="solo"
                        v-model="email"
                        :rules="emailRules"
                        label="E-Mail-Adresse"
                        required>       
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        variant="solo"
                        v-model="tel"
                        :rules="telRules"
                        label="Telefonnummer">       
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea
                        variant="solo"
                        v-model="message"
                        :rules="textRules"
                        label="Nachricht"
                        required>       
                    </v-textarea>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn  color="accent" type="submit">Absenden</v-btn>
                </v-col>
           </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        data: () => ({ 
            valid: false,
            firstname: '', // empty string for value saving (separat von validation)
            lastname: '',

            // vuetify :rules erwartet Array mit Regeln
            textRules: [
                value => {
                    if (value) return true;
                    return 'Bitte füllen Sie dieses Feld aus.';
                }
            ],
            email: '',
            emailRules: [
                value => {
                    if (value) return true;
                    return 'Bitte füllen Sie dieses Feld aus.';
                },
                value => {
                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
                    return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
                }
            ],
            tel: '',
            telRules: [
                value => {
                    if (/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/.test(value)) return true;
                    return 'Bitte geben Sie eine gültige Telefonnummer ein (freiwillig).'
                }
            ],
            message: ''
        })
    }
</script>