
//Datos del BCRA
//https://www.bcra.gob.ar/PublicacionesEstadisticas/Principales_variables_datos.asp?serie=7988&detalle=%CDndice%20para%20Contratos%20de%20Locaci%F3n%20
//(ICL-Ley%2027.551

let datos = {
"A2020-07-01": 1.00,"A2020-07-02": 1.00,"A2020-07-03": 1.00,"A2020-07-04": 1.00,"A2020-07-05": 1.00,"A2020-07-06": 1.00,"A2020-07-07": 1.00,"A2020-07-08": 1.00,
"A2020-07-09": 1.00,"A2020-07-10": 1.00,"A2020-07-11": 1.00,"A2020-07-12": 1.00,"A2020-07-13": 1.00,"A2020-07-14": 1.00,"A2020-07-15": 1.00,"A2020-07-16": 1.00,
"A2020-07-17": 1.00,"A2020-07-18": 1.00,"A2020-07-19": 1.01,"A2020-07-20": 1.01,"A2020-07-21": 1.01,"A2020-07-22": 1.01,"A2020-07-23": 1.01,"A2020-07-24": 1.01,
"A2020-07-25": 1.01,"A2020-07-26": 1.01,"A2020-07-27": 1.01,"A2020-07-28": 1.01,"A2020-07-29": 1.01,"A2020-07-30": 1.01,"A2020-07-31": 1.01,"A2020-08-01": 1.01,
"A2020-08-02": 1.01,"A2020-08-03": 1.01,"A2020-08-04": 1.01,"A2020-08-05": 1.01,"A2020-08-06": 1.01,"A2020-08-07": 1.01,"A2020-08-08": 1.01,"A2020-08-09": 1.01,
"A2020-08-10": 1.01,"A2020-08-11": 1.01,"A2020-08-12": 1.01,"A2020-08-13": 1.01,"A2020-08-14": 1.01,"A2020-08-15": 1.01,"A2020-08-16": 1.01,"A2020-08-17": 1.01,
"A2020-08-18": 1.01,"A2020-08-19": 1.02,"A2020-08-20": 1.02,"A2020-08-21": 1.02,"A2020-08-22": 1.02,"A2020-08-23": 1.02,"A2020-08-24": 1.02,"A2020-08-25": 1.02,
"A2020-08-26": 1.02,"A2020-08-27": 1.02,"A2020-08-28": 1.02,"A2020-08-29": 1.02,"A2020-08-30": 1.02,"A2020-08-31": 1.02,"A2020-09-01": 1.02,"A2020-09-02": 1.03,
"A2020-09-03": 1.03,"A2020-09-04": 1.03,"A2020-09-05": 1.03,"A2020-09-06": 1.03,"A2020-09-07": 1.03,"A2020-09-08": 1.03,"A2020-09-09": 1.03,"A2020-09-10": 1.03,
"A2020-09-11": 1.03,"A2020-09-12": 1.03,"A2020-09-13": 1.03,"A2020-09-14": 1.03,"A2020-09-15": 1.04,"A2020-09-16": 1.04,"A2020-09-17": 1.04,"A2020-09-18": 1.04,
"A2020-09-19": 1.04,"A2020-09-20": 1.04,"A2020-09-21": 1.04,"A2020-09-22": 1.04,"A2020-09-23": 1.04,"A2020-09-24": 1.04,"A2020-09-25": 1.04,"A2020-09-26": 1.05,
"A2020-09-27": 1.05,"A2020-09-28": 1.05,"A2020-09-29": 1.05,"A2020-09-30": 1.05,"A2020-10-01": 1.05,"A2020-10-02": 1.05,"A2020-10-03": 1.05,"A2020-10-04": 1.05,
"A2020-10-05": 1.05,"A2020-10-06": 1.05,"A2020-10-07": 1.06,"A2020-10-08": 1.06,"A2020-10-09": 1.06,"A2020-10-10": 1.06,"A2020-10-11": 1.06,"A2020-10-12": 1.06,
"A2020-10-13": 1.06,"A2020-10-14": 1.06,"A2020-10-15": 1.06,"A2020-10-16": 1.06,"A2020-10-17": 1.06,"A2020-10-18": 1.07,"A2020-10-19": 1.07,"A2020-10-20": 1.07,
"A2020-10-21": 1.07,"A2020-10-22": 1.07,"A2020-10-23": 1.07,"A2020-10-24": 1.07,"A2020-10-25": 1.07,"A2020-10-26": 1.07,"A2020-10-27": 1.07,"A2020-10-28": 1.07,
"A2020-10-29": 1.07,"A2020-10-30": 1.07,"A2020-10-31": 1.07,"A2020-11-01": 1.07,"A2020-11-02": 1.07,"A2020-11-03": 1.07,"A2020-11-04": 1.07,"A2020-11-05": 1.08,
"A2020-11-06": 1.08,"A2020-11-07": 1.08,"A2020-11-08": 1.08,"A2020-11-09": 1.08,"A2020-11-10": 1.08,"A2020-11-11": 1.08,"A2020-11-12": 1.08,"A2020-11-13": 1.08,
"A2020-11-14": 1.08,"A2020-11-15": 1.08,"A2020-11-16": 1.08,"A2020-11-17": 1.08,"A2020-11-18": 1.08,"A2020-11-19": 1.08,"A2020-11-20": 1.09,"A2020-11-21": 1.09,
"A2020-11-22": 1.09,"A2020-11-23": 1.09,"A2020-11-24": 1.09,"A2020-11-25": 1.09,"A2020-11-26": 1.09,"A2020-11-27": 1.09,"A2020-11-28": 1.09,"A2020-11-29": 1.09,
"A2020-11-30": 1.09,"A2020-12-01": 1.09,"A2020-12-02": 1.10,"A2020-12-03": 1.10,"A2020-12-04": 1.10,"A2020-12-05": 1.10,"A2020-12-06": 1.10,"A2020-12-07": 1.10,
"A2020-12-08": 1.10,"A2020-12-09": 1.10,"A2020-12-10": 1.10,"A2020-12-11": 1.10,"A2020-12-12": 1.10,"A2020-12-13": 1.10,"A2020-12-14": 1.11,"A2020-12-15": 1.11,
"A2020-12-16": 1.11,"A2020-12-17": 1.11,"A2020-12-18": 1.11,"A2020-12-19": 1.11,"A2020-12-20": 1.11,"A2020-12-21": 1.11,"A2020-12-22": 1.12,"A2020-12-23": 1.12,
"A2020-12-24": 1.12,"A2020-12-25": 1.12,"A2020-12-26": 1.12,"A2020-12-27": 1.12,"A2020-12-28": 1.12,"A2020-12-29": 1.13,"A2020-12-30": 1.13,"A2020-12-31": 1.13,
 
"A2021-01-01": 1.13,"A2021-01-02": 1.13,"A2021-01-03": 1.13,"A2021-01-04": 1.14,"A2021-01-05": 1.14,"A2021-01-06": 1.14,"A2021-01-07": 1.14,"A2021-01-08": 1.14,
"A2021-01-09": 1.14,"A2021-01-10": 1.14,"A2021-01-11": 1.15,"A2021-01-12": 1.15,"A2021-01-13": 1.15,"A2021-01-14": 1.15,"A2021-01-15": 1.15,"A2021-01-16": 1.15,
"A2021-01-17": 1.15,"A2021-01-18": 1.16,"A2021-01-19": 1.16,"A2021-01-20": 1.16,"A2021-01-21": 1.16,"A2021-01-22": 1.16,"A2021-01-23": 1.16,"A2021-01-24": 1.16,
"A2021-01-25": 1.16,"A2021-01-26": 1.16,"A2021-01-27": 1.16,"A2021-01-28": 1.16,"A2021-01-29": 1.16,"A2021-01-30": 1.16,"A2021-01-31": 1.17,"A2021-02-01": 1.17,
"A2021-02-02": 1.17,"A2021-02-03": 1.17,"A2021-02-04": 1.17,"A2021-02-05": 1.17,"A2021-02-06": 1.17,"A2021-02-07": 1.17,"A2021-02-08": 1.17,"A2021-02-09": 1.17,
"A2021-02-10": 1.17,"A2021-02-11": 1.17,"A2021-02-12": 1.18,"A2021-02-13": 1.18,"A2021-02-14": 1.18,"A2021-02-15": 1.18,"A2021-02-16": 1.18,"A2021-02-17": 1.18,
"A2021-02-18": 1.18,"A2021-02-19": 1.18,"A2021-02-20": 1.18,"A2021-02-21": 1.19,"A2021-02-22": 1.19,"A2021-02-23": 1.19,"A2021-02-24": 1.19,"A2021-02-25": 1.19,
"A2021-02-26": 1.19,"A2021-02-27": 1.19,"A2021-02-28": 1.19,"A2021-03-01": 1.20,"A2021-03-02": 1.20,"A2021-03-03": 1.20,"A2021-03-04": 1.20,"A2021-03-05": 1.20,
"A2021-03-06": 1.20,"A2021-03-07": 1.20,"A2021-03-08": 1.20,"A2021-03-09": 1.21,"A2021-03-10": 1.21,"A2021-03-11": 1.21,"A2021-03-12": 1.21,"A2021-03-13": 1.21,
"A2021-03-14": 1.21,"A2021-03-15": 1.21,"A2021-03-16": 1.21,"A2021-03-17": 1.22,"A2021-03-18": 1.22,"A2021-03-19": 1.22,"A2021-03-20": 1.22,"A2021-03-21": 1.22,
"A2021-03-22": 1.22,"A2021-03-23": 1.22,"A2021-03-24": 1.22,"A2021-03-25": 1.22,"A2021-03-26": 1.23,"A2021-03-27": 1.23,"A2021-03-28": 1.23,"A2021-03-29": 1.23,
"A2021-03-30": 1.23,"A2021-03-31": 1.23,"A2021-04-01": 1.23,"A2021-04-02": 1.23,"A2021-04-03": 1.23,"A2021-04-04": 1.24,"A2021-04-05": 1.24,"A2021-04-06": 1.24,
"A2021-04-07": 1.24,"A2021-04-08": 1.24,"A2021-04-09": 1.24,"A2021-04-10": 1.24,"A2021-04-11": 1.24,"A2021-04-12": 1.25,"A2021-04-13": 1.25,"A2021-04-14": 1.25,
"A2021-04-15": 1.25,"A2021-04-16": 1.25,"A2021-04-17": 1.25,"A2021-04-18": 1.25,"A2021-04-19": 1.26,"A2021-04-20": 1.26,"A2021-04-21": 1.26,"A2021-04-22": 1.26,
"A2021-04-23": 1.26,"A2021-04-24": 1.27,"A2021-04-25": 1.27,"A2021-04-26": 1.27,"A2021-04-27": 1.27,"A2021-04-28": 1.27,"A2021-04-29": 1.28,"A2021-04-30": 1.28,
"A2021-05-01": 1.28,"A2021-05-02": 1.28,"A2021-05-03": 1.28,"A2021-05-04": 1.29,"A2021-05-05": 1.29,"A2021-05-06": 1.29,"A2021-05-07": 1.29,"A2021-05-08": 1.29,
"A2021-05-09": 1.30,"A2021-05-10": 1.30,"A2021-05-11": 1.30,"A2021-05-12": 1.30,"A2021-05-13": 1.30,"A2021-05-14": 1.31,"A2021-05-15": 1.31,"A2021-05-16": 1.31,
"A2021-05-17": 1.31,"A2021-05-18": 1.31,"A2021-05-19": 1.32,"A2021-05-20": 1.32,"A2021-05-21": 1.32,"A2021-05-22": 1.32,"A2021-05-23": 1.32,"A2021-05-24": 1.33,
"A2021-05-25": 1.33,"A2021-05-26": 1.33,"A2021-05-27": 1.33,"A2021-05-28": 1.33,"A2021-05-29": 1.34,"A2021-05-30": 1.34,"A2021-05-31": 1.34,"A2021-06-01": 1.34,
"A2021-06-02": 1.35,"A2021-06-03": 1.35,"A2021-06-04": 1.35,"A2021-06-05": 1.35,"A2021-06-06": 1.35,"A2021-06-07": 1.36,"A2021-06-08": 1.36,"A2021-06-09": 1.36,
"A2021-06-10": 1.36,"A2021-06-11": 1.36,"A2021-06-12": 1.37,"A2021-06-13": 1.37,"A2021-06-14": 1.37,"A2021-06-15": 1.37,"A2021-06-16": 1.37,"A2021-06-17": 1.38,
"A2021-06-18": 1.38,"A2021-06-19": 1.38,"A2021-06-20": 1.38,"A2021-06-21": 1.39,"A2021-06-22": 1.39,"A2021-06-23": 1.39,"A2021-06-24": 1.39,"A2021-06-25": 1.39,
"A2021-06-26": 1.40,"A2021-06-27": 1.40,"A2021-06-28": 1.40,"A2021-06-29": 1.40,"A2021-06-30": 1.41,"A2021-07-01": 1.41,"A2021-07-02": 1.41,"A2021-07-03": 1.41,
"A2021-07-04": 1.42,"A2021-07-05": 1.42,"A2021-07-06": 1.42,"A2021-07-07": 1.42,"A2021-07-08": 1.43,"A2021-07-09": 1.43,"A2021-07-10": 1.43,"A2021-07-11": 1.43,
"A2021-07-12": 1.44,"A2021-07-13": 1.44,"A2021-07-14": 1.44,"A2021-07-15": 1.44,"A2021-07-16": 1.44,"A2021-07-17": 1.45,"A2021-07-18": 1.45,"A2021-07-19": 1.45,
"A2021-07-20": 1.45,"A2021-07-21": 1.45,"A2021-07-22": 1.45,"A2021-07-23": 1.45,"A2021-07-24": 1.45,"A2021-07-25": 1.45,"A2021-07-26": 1.46,"A2021-07-27": 1.46,
"A2021-07-28": 1.46,"A2021-07-29": 1.46,"A2021-07-30": 1.46,"A2021-07-31": 1.46,"A2021-08-01": 1.46,"A2021-08-02": 1.46,"A2021-08-03": 1.46,"A2021-08-04": 1.46,
"A2021-08-05": 1.47,"A2021-08-06": 1.47,"A2021-08-07": 1.47,"A2021-08-08": 1.47,"A2021-08-09": 1.47,"A2021-08-10": 1.47,"A2021-08-11": 1.47,"A2021-08-12": 1.47,
"A2021-08-13": 1.47,"A2021-08-14": 1.48,"A2021-08-15": 1.48,"A2021-08-16": 1.48,"A2021-08-17": 1.48,"A2021-08-18": 1.48,"A2021-08-19": 1.48,"A2021-08-20": 1.48,
"A2021-08-21": 1.49,"A2021-08-22": 1.49,"A2021-08-23": 1.49,"A2021-08-24": 1.49,"A2021-08-25": 1.49,"A2021-08-26": 1.49,"A2021-08-27": 1.50,"A2021-08-28": 1.50,
"A2021-08-29": 1.50,"A2021-08-30": 1.50,"A2021-08-31": 1.50,"A2021-09-01": 1.50,"A2021-09-02": 1.51,"A2021-09-03": 1.51,"A2021-09-04": 1.51,"A2021-09-05": 1.51,
"A2021-09-06": 1.51,"A2021-09-07": 1.51,"A2021-09-08": 1.52,"A2021-09-09": 1.52,"A2021-09-10": 1.52,"A2021-09-11": 1.52,"A2021-09-12": 1.52,"A2021-09-13": 1.52,
"A2021-09-14": 1.53,"A2021-09-15": 1.53,"A2021-09-16": 1.53,"A2021-09-17": 1.53,"A2021-09-18": 1.53,"A2021-09-19": 1.53,"A2021-09-20": 1.54,"A2021-09-21": 1.54,
"A2021-09-22": 1.54,"A2021-09-23": 1.54,"A2021-09-24": 1.54,"A2021-09-25": 1.55,"A2021-09-26": 1.55,"A2021-09-27": 1.55,"A2021-09-28": 1.55,"A2021-09-29": 1.55,
"A2021-09-30": 1.55,"A2021-10-01": 1.56,"A2021-10-02": 1.56,"A2021-10-03": 1.56,"A2021-10-04": 1.56,"A2021-10-05": 1.56,"A2021-10-06": 1.57,"A2021-10-07": 1.57,
"A2021-10-08": 1.57,"A2021-10-09": 1.57,"A2021-10-10": 1.57,"A2021-10-11": 1.58,"A2021-10-12": 1.58,"A2021-10-13": 1.58,"A2021-10-14": 1.58,"A2021-10-15": 1.58,
"A2021-10-16": 1.59,"A2021-10-17": 1.59,"A2021-10-18": 1.59,"A2021-10-19": 1.59,"A2021-10-20": 1.59,"A2021-10-21": 1.59,"A2021-10-22": 1.59,"A2021-10-23": 1.59,
"A2021-10-24": 1.60,"A2021-10-25": 1.60,"A2021-10-26": 1.60,"A2021-10-27": 1.60,"A2021-10-28": 1.60,"A2021-10-29": 1.60,"A2021-10-30": 1.60,"A2021-10-31": 1.60,
"A2021-11-01": 1.60,"A2021-11-02": 1.61,"A2021-11-03": 1.61,"A2021-11-04": 1.61,"A2021-11-05": 1.61,"A2021-11-06": 1.61,"A2021-11-07": 1.61,"A2021-11-08": 1.61,
"A2021-11-09": 1.61,"A2021-11-10": 1.62,"A2021-11-11": 1.62,"A2021-11-12": 1.62,"A2021-11-13": 1.62,"A2021-11-14": 1.62,"A2021-11-15": 1.62,"A2021-11-16": 1.62,
"A2021-11-17": 1.63,"A2021-11-18": 1.63,"A2021-11-19": 1.63,"A2021-11-20": 1.63,"A2021-11-21": 1.63,"A2021-11-22": 1.64,"A2021-11-23": 1.64,"A2021-11-24": 1.64,
"A2021-11-25": 1.64,"A2021-11-26": 1.64,"A2021-11-27": 1.65,"A2021-11-28": 1.65,"A2021-11-29": 1.65,"A2021-11-30": 1.65,"A2021-12-01": 1.65,"A2021-12-02": 1.66,
"A2021-12-03": 1.66,"A2021-12-04": 1.66,"A2021-12-05": 1.66,"A2021-12-06": 1.67,"A2021-12-07": 1.67,"A2021-12-08": 1.67,"A2021-12-09": 1.67,"A2021-12-10": 1.67,
"A2021-12-11": 1.68,"A2021-12-12": 1.68,"A2021-12-13": 1.68,"A2021-12-14": 1.68,"A2021-12-15": 1.68,"A2021-12-16": 1.69,"A2021-12-17": 1.69,"A2021-12-18": 1.69,
"A2021-12-19": 1.69,"A2021-12-20": 1.69,"A2021-12-21": 1.70,"A2021-12-22": 1.70,"A2021-12-23": 1.70,"A2021-12-24": 1.70,"A2021-12-25": 1.70,"A2021-12-26": 1.71,
"A2021-12-27": 1.71,"A2021-12-28": 1.71,"A2021-12-29": 1.71,"A2021-12-30": 1.71,"A2021-12-31": 1.72,		

"A2022-01-01": 1.72,"A2022-01-02": 1.72,"A2022-01-03": 1.72,"A2022-01-04": 1.72,"A2022-01-05": 1.73,"A2022-01-06": 1.73,"A2022-01-07": 1.73,"A2022-01-08": 1.73,
"A2022-01-09": 1.73,"A2022-01-10": 1.73,"A2022-01-11": 1.74,"A2022-01-12": 1.74,"A2022-01-13": 1.74,"A2022-01-14": 1.74,"A2022-01-15": 1.74,"A2022-01-16": 1.75,
"A2022-01-17": 1.75,"A2022-01-18": 1.75,"A2022-01-19": 1.75,"A2022-01-20": 1.75,"A2022-01-21": 1.75,"A2022-01-22": 1.76,"A2022-01-23": 1.76,"A2022-01-24": 1.76,
"A2022-01-25": 1.76,"A2022-01-26": 1.76,"A2022-01-27": 1.76,"A2022-01-28": 1.77,"A2022-01-29": 1.77,"A2022-01-30": 1.77,"A2022-01-31": 1.77,"A2022-02-01": 1.77,
"A2022-02-02": 1.77,"A2022-02-03": 1.78,"A2022-02-04": 1.78,"A2022-02-05": 1.78,"A2022-02-06": 1.78,"A2022-02-07": 1.78,"A2022-02-08": 1.78,"A2022-02-09": 1.78,
"A2022-02-10": 1.79,"A2022-02-11": 1.79,"A2022-02-12": 1.79,"A2022-02-13": 1.79,"A2022-02-14": 1.79,"A2022-02-15": 1.79,"A2022-02-16": 1.80,"A2022-02-17": 1.80,
"A2022-02-18": 1.80,"A2022-02-19": 1.80,"A2022-02-20": 1.80,"A2022-02-21": 1.81,"A2022-02-22": 1.81,"A2022-02-23": 1.81,"A2022-02-24": 1.81,"A2022-02-25": 1.81,
"A2022-02-26": 1.81,"A2022-02-27": 1.82,"A2022-02-28": 1.82,"A2022-03-01": 1.82,"A2022-03-02": 1.82,"A2022-03-03": 1.82,"A2022-03-04": 1.83,"A2022-03-05": 1.83,
"A2022-03-06": 1.83,"A2022-03-07": 1.83,"A2022-03-08": 1.83,"A2022-03-09": 1.84,"A2022-03-10": 1.84,"A2022-03-11": 1.84,"A2022-03-12": 1.84,"A2022-03-13": 1.84,
"A2022-03-14": 1.84,"A2022-03-15": 1.85,"A2022-03-16": 1.85,"A2022-03-17": 1.85,"A2022-03-18": 1.85,"A2022-03-19": 1.86,"A2022-03-20": 1.86,"A2022-03-21": 1.86,
"A2022-03-22": 1.86,"A2022-03-23": 1.87,"A2022-03-24": 1.87,"A2022-03-25": 1.87,"A2022-03-26": 1.87,"A2022-03-27": 1.88,"A2022-03-28": 1.88,"A2022-03-29": 1.88,
"A2022-03-30": 1.88,"A2022-03-31": 1.89,"A2022-04-01": 1.89,"A2022-04-02": 1.89,"A2022-04-03": 1.89,"A2022-04-04": 1.90,"A2022-04-05": 1.90,"A2022-04-06": 1.90,
"A2022-04-07": 1.90,"A2022-04-08": 1.91,"A2022-04-09": 1.91,"A2022-04-10": 1.91,"A2022-04-11": 1.91,"A2022-04-12": 1.92,"A2022-04-13": 1.92,"A2022-04-14": 1.92,
"A2022-04-15": 1.92,"A2022-04-16": 1.93,"A2022-04-17": 1.93,"A2022-04-18": 1.93,"A2022-04-19": 1.94,"A2022-04-20": 1.94,"A2022-04-21": 1.94,"A2022-04-22": 1.94,
"A2022-04-23": 1.95,"A2022-04-24": 1.95,"A2022-04-25": 1.95,"A2022-04-26": 1.96,"A2022-04-27": 1.96,"A2022-04-28": 1.96,"A2022-04-29": 1.97,"A2022-04-30": 1.97,
"A2022-05-01": 1.97,"A2022-05-02": 1.97,"A2022-05-03": 1.98,"A2022-05-04": 1.98,"A2022-05-05": 1.98,"A2022-05-06": 1.99,"A2022-05-07": 1.99,"A2022-05-08": 1.99,
"A2022-05-09": 2.00,"A2022-05-10": 2.00,"A2022-05-11": 2.00,"A2022-05-12": 2.01,"A2022-05-13": 2.01,"A2022-05-14": 2.01,"A2022-05-15": 2.01,"A2022-05-16": 2.02,
"A2022-05-17": 2.02,"A2022-05-18": 2.03,"A2022-05-19": 2.03,"A2022-05-20": 2.04,"A2022-05-21": 2.04,"A2022-05-22": 2.05,"A2022-05-23": 2.05,"A2022-05-24": 2.05,
"A2022-05-25": 2.06,"A2022-05-26": 2.06,"A2022-05-27": 2.07,"A2022-05-28": 2.07,"A2022-05-29": 2.08,"A2022-05-30": 2.08,"A2022-05-31": 2.09,"A2022-06-01": 2.09,
"A2022-06-02": 2.10,"A2022-06-03": 2.10,"A2022-06-04": 2.11,"A2022-06-05": 2.11,"A2022-06-06": 2.12,"A2022-06-07": 2.12,"A2022-06-08": 2.13,"A2022-06-09": 2.13,
"A2022-06-10": 2.14,"A2022-06-11": 2.14,"A2022-06-12": 2.15,"A2022-06-13": 2.15,"A2022-06-14": 2.15,"A2022-06-15": 2.16,"A2022-06-16": 2.16,"A2022-06-17": 2.17,
"A2022-06-18": 2.17,"A2022-06-19": 2.18,"A2022-06-20": 2.18,"A2022-06-21": 2.19,"A2022-06-22": 2.19,"A2022-06-23": 2.19,"A2022-06-24": 2.20,"A2022-06-25": 2.20,
"A2022-06-26": 2.21,"A2022-06-27": 2.21,"A2022-06-28": 2.22,"A2022-06-29": 2.22,"A2022-06-30": 2.22,"A2022-07-01": 2.23,"A2022-07-02": 2.23,"A2022-07-03": 2.24,
"A2022-07-04": 2.24,"A2022-07-05": 2.25,"A2022-07-06": 2.25,"A2022-07-07": 2.25,"A2022-07-08": 2.26,"A2022-07-09": 2.26,"A2022-07-10": 2.27,"A2022-07-11": 2.27,
"A2022-07-12": 2.28,"A2022-07-13": 2.28,"A2022-07-14": 2.29,"A2022-07-15": 2.29,"A2022-07-16": 2.29,"A2022-07-17": 2.30,"A2022-07-18": 2.30,"A2022-07-19": 2.30,
"A2022-07-20": 2.31,"A2022-07-21": 2.31,"A2022-07-22": 2.31,"A2022-07-23": 2.32,"A2022-07-24": 2.32,"A2022-07-25": 2.32,"A2022-07-26": 2.33,"A2022-07-27": 2.33,
"A2022-07-28": 2.33,"A2022-07-29": 2.34,"A2022-07-30": 2.34,"A2022-07-31": 2.34,"A2022-08-01": 2.35,"A2022-08-02": 2.35,"A2022-08-03": 2.35,"A2022-08-04": 2.36,
"A2022-08-05": 2.36,"A2022-08-06": 2.36,"A2022-08-07": 2.37,"A2022-08-08": 2.37,"A2022-08-09": 2.37,"A2022-08-10": 2.38,"A2022-08-11": 2.38,"A2022-08-12": 2.38,
"A2022-08-13": 2.39,"A2022-08-14": 2.39,"A2022-08-15": 2.40,"A2022-08-16": 2.40,"A2022-08-17": 2.40,"A2022-08-18": 2.41,"A2022-08-19": 2.41,"A2022-08-20": 2.42,
"A2022-08-21": 2.42,"A2022-08-22": 2.42,"A2022-08-23": 2.43,"A2022-08-24": 2.43,"A2022-08-25": 2.44,"A2022-08-26": 2.44,"A2022-08-27": 2.44,"A2022-08-28": 2.45,
"A2022-08-29": 2.45,"A2022-08-30": 2.46,"A2022-08-31": 2.46,"A2022-09-01": 2.47,"A2022-09-02": 2.47,"A2022-09-03": 2.47,"A2022-09-04": 2.48,"A2022-09-05": 2.48,
"A2022-09-06": 2.49,"A2022-09-07": 2.49,"A2022-09-08": 2.50,"A2022-09-09": 2.50,"A2022-09-10": 2.50,"A2022-09-11": 2.51,"A2022-09-12": 2.51,"A2022-09-13": 2.52,
"A2022-09-14": 2.52,"A2022-09-15": 2.53,"A2022-09-16": 2.53,"A2022-09-17": 2.54,"A2022-09-18": 2.54,"A2022-09-19": 2.55,"A2022-09-20": 2.55,"A2022-09-21": 2.56,
"A2022-09-22": 2.56,"A2022-09-23": 2.57,"A2022-09-24": 2.57,"A2022-09-25": 2.58,"A2022-09-26": 2.58,"A2022-09-27": 2.59,"A2022-09-28": 2.59,"A2022-09-29": 2.60,
"A2022-09-30": 2.61,"A2022-10-01": 2.61,"A2022-10-02": 2.62,"A2022-10-03": 2.62,"A2022-10-04": 2.63,"A2022-10-05": 2.63,"A2022-10-06": 2.64,"A2022-10-07": 2.64,
"A2022-10-08": 2.65,"A2022-10-09": 2.65,"A2022-10-10": 2.66,"A2022-10-11": 2.66,"A2022-10-12": 2.67,"A2022-10-13": 2.68,"A2022-10-14": 2.68,"A2022-10-15": 2.69,
"A2022-10-24": 2.73,"A2022-10-25": 2.74,"A2022-10-26": 2.74,"A2022-10-27": 2.75,"A2022-10-28": 2.75,"A2022-10-29": 2.76,"A2022-10-30": 2.76,"A2022-10-31": 2.77,
"A2022-10-16": 2.69,"A2022-10-17": 2.70,"A2022-10-18": 2.70,"A2022-10-19": 2.71,"A2022-10-20": 2.71,"A2022-10-21": 2.72,"A2022-10-22": 2.72,"A2022-10-23": 2.73,
"A2022-11-01": 2.77,"A2022-11-02": 2.78,"A2022-11-03": 2.78,"A2022-11-04": 2.79,"A2022-11-05": 2.79,"A2022-11-06": 2.80,"A2022-11-07": 2.80,"A2022-11-08": 2.81,
"A2022-11-09": 2.81,"A2022-11-10": 2.82,"A2022-11-11": 2.82,"A2022-11-12": 2.83,"A2022-11-13": 2.83,"A2022-11-14": 2.84,"A2022-11-15": 2.84,"A2022-11-16": 2.85,
"A2022-11-17": 2.85,"A2022-11-18": 2.86,"A2022-11-19": 2.86,"A2022-11-20": 2.87,"A2022-11-21": 2.88,"A2022-11-22": 2.88,"A2022-11-23": 2.89,"A2022-11-24": 2.89,
"A2022-11-25": 2.90,"A2022-11-26": 2.91,"A2022-11-27": 2.91,"A2022-11-28": 2.92,"A2022-11-29": 2.92,"A2022-11-30": 2.93,"A2022-12-01": 2.93,"A2022-12-02": 2.94,
"A2022-12-03": 2.95,"A2022-12-04": 2.95,"A2022-12-05": 2.96,"A2022-12-06": 2.96,"A2022-12-07": 2.97,"A2022-12-08": 2.98,"A2022-12-09": 2.98,"A2022-12-10": 2.99,
"A2022-12-11": 2.99,"A2022-12-12": 3.00,"A2022-12-13": 3.01,"A2022-12-14": 3.01,"A2022-12-15": 3.02,"A2022-12-16": 3.03,"A2022-12-17": 3.03,"A2022-12-18": 3.04,
"A2022-12-19": 3.04,"A2022-12-20": 3.05,"A2022-12-21": 3.05,"A2022-12-22": 3.06,"A2022-12-23": 3.06,"A2022-12-24": 3.07,"A2022-12-25": 3.08,"A2022-12-26": 3.08,
"A2022-12-27": 3.09,"A2022-12-28": 3.09,"A2022-12-29": 3.10,"A2022-12-30": 3.10,"A2022-12-31": 3.11,
    
"A2023-01-01": 3.12,"A2023-01-02": 3.12,"A2023-01-03": 3.13,"A2023-01-04": 3.13,"A2023-01-05": 3.14,"A2023-01-06": 3.14,"A2023-01-07": 3.15,"A2023-01-08": 3.16,
"A2023-01-09": 3.16,"A2023-01-10": 3.17,"A2023-01-11": 3.17,"A2023-01-12": 3.18,"A2023-01-13": 3.19,"A2023-01-14": 3.19,"A2023-01-15": 3.20,"A2023-01-16": 3.20,
"A2023-01-17": 3.21,"A2023-01-18": 3.21,"A2023-01-19": 3.22,"A2023-01-20": 3.22,"A2023-01-21": 3.23,"A2023-01-22": 3.24,"A2023-01-23": 3.24,"A2023-01-24": 3.25,
"A2023-01-25": 3.25,"A2023-01-26": 3.26,"A2023-01-27": 3.26,"A2023-01-28": 3.27,"A2023-01-29": 3.27,"A2023-01-30": 3.28,"A2023-01-31": 3.28,"A2023-02-01": 3.29,
"A2023-02-02": 3.29,"A2023-02-03": 3.30,"A2023-02-04": 3.31,"A2023-02-05": 3.31,"A2023-02-06": 3.32,"A2023-02-07": 3.32,"A2023-02-08": 3.33,"A2023-02-09": 3.33,
"A2023-02-10": 3.34,"A2023-02-11": 3.34,"A2023-02-12": 3.35,"A2023-02-13": 3.36,"A2023-02-14": 3.36,"A2023-02-15": 3.37,"A2023-02-16": 3.37,"A2023-02-17": 3.38,
"A2023-02-18": 3.38,"A2023-02-19": 3.39,"A2023-02-20": 3.40,"A2023-02-21": 3.40,"A2023-02-22": 3.41,"A2023-02-23": 3.42,"A2023-02-24": 3.42,"A2023-02-25": 3.43,
"A2023-02-26": 3.43,"A2023-02-27": 3.44,"A2023-02-28": 3.45,"A2023-03-01": 3.45,"A2023-03-02": 3.46,"A2023-03-03": 3.47,"A2023-03-04": 3.47,"A2023-03-05": 3.48,
"A2023-03-06": 3.49,"A2023-03-07": 3.49,"A2023-03-08": 3.50,"A2023-03-09": 3.50,"A2023-03-10": 3.51,"A2023-03-11": 3.52,"A2023-03-12": 3.52,"A2023-03-13": 3.53,
"A2023-03-14": 3.54,"A2023-03-15": 3.54,"A2023-03-16": 3.55,"A2023-03-17": 3.56,"A2023-03-18": 3.56,"A2023-03-19": 3.57,"A2023-03-20": 3.57,"A2023-03-21": 3.58,
"A2023-03-22": 3.58,"A2023-03-23": 3.59,"A2023-03-24": 3.59,"A2023-03-25": 3.60,"A2023-03-26": 3.61,"A2023-03-27": 3.61,"A2023-03-28": 3.62,"A2023-03-29": 3.62,
"A2023-03-30": 3.63,"A2023-03-31": 3.63,"A2023-04-01": 3.64,"A2023-04-02": 3.64,"A2023-04-03": 3.65,"A2023-04-04": 3.66,"A2023-04-05": 3.66,"A2023-04-06": 3.67,
"A2023-04-07": 3.67,"A2023-04-08": 3.68,"A2023-04-09": 3.68,"A2023-04-10": 3.69,"A2023-04-11": 3.70,"A2023-04-12": 3.70,"A2023-04-13": 3.71,"A2023-04-14": 3.71,
"A2023-04-15": 3.72,"A2023-04-16": 3.72




    //Actualizado al 16/04/2023
    //Próxima actualización el 17/04/2023
    //Después de actualizar el objeto datos, modificar fechas en html
};

let anio1, anio2, mes1, mes2, dia1, dia2, precio1, precio2, fechaFormateada1, fechaFormateada2, valorFecha1, valorFecha2, renovacion, mostrarPrecio, porcentual;

function recuperarValor(valorBuscado) {
    return datos[valorBuscado];
}

function obtenerDatos() {
    //Fecha inicio
    dia1 = document.getElementById('dia1').value;
    mes1 = document.getElementById('mes1').value;
    anio1 = document.getElementById('anio1').value;
    fechaFormateada1 = `A${anio1}-${mes1}-${dia1}`;
    
    //Precio al inicio
    precio1 = document.getElementById('precio1').value;

    //Fecha renovación
    dia2 = document.getElementById('dia2').value;
    mes2 = document.getElementById('mes2').value;
    anio2 = document.getElementById('anio2').value;
    fechaFormateada2 = `A${anio2}-${mes2}-${dia2}`;
    
    valorFecha1 = recuperarValor(fechaFormateada1); 
    valorFecha2 = recuperarValor(fechaFormateada2); 
    
    renovacion = Math.round((precio1 / valorFecha1) * valorFecha2);
    porcentual = (renovacion - precio1) / precio1 * 100;
    mostrarPrecio = document.getElementById('formulario__mensaje-precio2');

    mostrarPrecio.innerHTML = `<h4 style='font-size: 20px; text-align: center; color: #fafafa; background: rgb(171, 52, 52); margin-bottom: 40px; padding: 10px 20px; border-radius: 3px;'>
    Precio actualizado:<br>$ ${renovacion} (${porcentual.toFixed(2)}%)</h4><div class='formulario__grupo-btn-calcular'><button type='button' onclick='location.reload()' class='formulario__btn'>Borrar</button>
    <p id='formulario__mensaje-precio2'></p></div>`;
}

