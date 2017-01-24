var data_ntd =
{
    templates: [
        {
            name: "Select an option",
            file:"BU02_template.xlsx",
            sheets: []
        },
        {
            name: "BU02 data template",
            file:"BU02_template.xlsx",
            sheets: [
                {
                    sheet_type: "EVENTS",
                    sheet_no: 1,
                    data_starting_row : "5",
                    key_column : "B",
                    ou_col : "B",
                    program : "lAu94BiaY5s",
                    event_date_col: "C", //should be a letter

                    event_des: [
                        {deuid: "GEN_FirstName_T", column: "D"},
                        {deuid: "GEN_Registry Number_T", column: "E"},
                        {deuid: "GEN_Age_T", column: "F"},
                        {deuid: "GEN_Sexe_T", column: "G"},
                        {deuid: "GEN_Address_T", column: "H"},
                        {deuid: "GEN_Locality_T", column: "I"},
                        {deuid: "Skin_Cl_Classif_T", column: "J"},
                        {deuid: "Skin_Cl_Nodule_T", column: "K"},
                        {deuid: "Skin_Cl_Oedema_T", column: "L"},
                        {deuid: "Skin_Cl_Osteomyelitis_T", column: "M"},
                        {deuid: "Skin_Cl_Papule_T", column: "N"},
                        {deuid: "Skin_Cl_Ulcer_T", column: "O"},
                        {deuid: "Skin_Cl_Plaque_T", column: "P"},
                        {deuid: "Skin_Cl_Eye_T", column: "Q"},
                        {deuid: "Skin_Cl_Breast_T", column: "R"},
                        {deuid: "Skin_Cl_Genitalia_T", column: "S"},
                        {deuid: "Skin_Cl_Abdomen_T", column: "T"},
                        {deuid: "Skin_Cl_Back_T", column: "U"},
                        {deuid: "Skin_Cl_Buttocks perineum_T", column: "V"},
                        {deuid: "Skin_Cl_Head Neck_T", column: "W"},
                        {deuid: "Skin_Cl_Lower Limb_T", column: "X"},
                        {deuid: "Skin_Cl_Thorax_T", column: "Y"},
                        {deuid: "Skin_Cl_Upper limb_T", column: "Z"},
                        {deuid: "BU_Cl_category_T", column: "AA"},
                        {deuid: "BU_Cl_jointLimitation_T", column: "AB"},
                        {deuid: "BU_Spe_T", column: "AC"},
                        {deuid: "BU_Tx_AB_T", column: "AD"}
                    ]
                }
            ]
        },
        {
            name: "VL register template",
            file:"VL_register_template.xlsx",
            sheets: [
                {
                    sheet_type: "EVENTS",
                    sheet_no: 1,
                    data_starting_row : "5",
                    key_column : "B",
                    ou_col : "B",
                    program : "TFTLPseQEgi",
                    event_date_col: "C", //should be a letter

                    event_des: [
                        {deuid: "GEN_ID Number_T", column: "D"},
                        {deuid: "GEN_FirstName_T", column: "E"},
                        {deuid: "GEN_Family name_T", column: "F"},
                        {deuid: "GEN_CountryOfInfection_T", column: "G"},
                        {deuid: "GEN_imported_T", column: "H"},
                        {deuid: "GEN_PlaceOfInfection_T", column: "I"},
                        {deuid: "GEN_Sexe_T", column: "J"},
                        {deuid: "GEN_DayOfBirth_T", column: "K"},
                        {deuid: "GEN_YearOfBirth_T", column: "L"},
                        {deuid: "GEN_Age_T", column: "M"},
                        {deuid: "VL_Type_T", column: "N"},
                        {deuid: "GEN_HIV_status_T", column: "O"},
                        {deuid: "GEN_Cl_patientDelay_day_T", column: "P"},
                        {deuid: "VL_Lab_RDT_T", column: "Q"},
                        {deuid: "VL_Lab_DAT_T", column: "R"},
                        {deuid: "VL_Lab_Micro_result_T", column: "S"},
                        {deuid: "VL_Conf_type_T", column: "T"},
                        {deuid: "VL_Tx_start_T", column: "U"},
                        {deuid: "VL_Tx_regimen_T", column: "V"},
                        {deuid: "VL_Tx_adverseEvent_T", column: "W"},
                        {deuid: "VL_TREAT_completion_T", column: "X"},
                        {deuid: "VL_TxO_Date_T", column: "Y"},
                        {deuid: "VL_TxO_T", column: "Z"},
                        {deuid: "VL_FU_Date_T", column: "AA"},
                        {deuid: "VL_FU_outcome_T", column: "AB"}
                    ]
                }
            ]
        },
        {
            name: "HAT sentinel sites",
            file:"HAT_template.xlsx",
            sheets: [
                {
                    sheet_type: "EVENTS",
                    sheet_no: 1,
                    data_starting_row : "5",
                    key_column : "B",
                    ou_col : "B",
                    program : "QFe138xdQcq",
                    event_date_col: "C", //should be a letter

                    event_des: [
                        {deuid: "HAT_ID_T", column: "D"},
                        {deuid: "GEN_Sexe_T", column: "E"},
                        {deuid: "GEN_Age_T", column: "F"},
                        {deuid: "GEN_Address_T", column: "G"},
                        {deuid: "GEN_CountryOfResidence_T", column: "H"},
                        {deuid: "HAT_test_date_T", column: "I"},
                        {deuid: "HAT_serological_test_type_T", column: "J"},
                        {deuid: "HAT_TDR_type_T", column: "K"},
                        {deuid: "HAT_CATT_dilution_T", column: "L"},
                        {deuid: "HAT_Serological_test_result", column: "M"},
                        {deuid: "HAT_Trypanolyse_T", column: "N"},
                        {deuid: "HAT_trypanolysis_date_performed_T", column: "O"},
                        {deuid: "HAT_Trypanolyse_result_T", column: "P"}
                    ]
                }
            ]
        }
    ]
}
