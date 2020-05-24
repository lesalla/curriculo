sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {

			//window._painel = this.byId("panel_competencias");

			var oFonteDeDados = {
				nome: "Leandro",
				sobrenome: "Salla",
				endereco: {
					rua: "Av. Paulista",
					numero: "1000",
					cidade: "São Bernardo do Campo",
					estado: {
						nome: "São Paulo",
						sigla: "SP"
					}
				},
				quiz_1: 60,
				quiz_1_media: 3,
				competencias: ["ABAP", "UI5", "javascript"],
				empresas: [{
					nome: "Empresa 1",
					cargo: "Desenvolvedor Júnior"
				}, {
					nome: "Empresa 2",
					cargo: "Desenvolvedor Pleno"
				}, {
					nome: "Empresa 3",
					cargo: "Desenvolvedor Sênior"
				}]
			};
			//var oModeloPessoal = new JSONModel(oFonteDeDados);
			var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec987533000000d00a6ce0d");
			this.getView().setModel(oModeloPessoal);

			var sGitHubURL = "https://api.github.com/users/fabiopagoti/repos";
			var oModeloGitHub = new JSONModel(sGitHubURL);
			this.byId("table_github").setModel(oModeloGitHub, "github");
		},
		toUpper: function (sTexto) {
			if (!sTexto) {
				return "???";
			}
			return sTexto.toUpperCase();
		}
	});
});