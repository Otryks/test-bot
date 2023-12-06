const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List of commands.'),
	async execute(interaction) {
		// eslint-disable-next-line quotes
		await interaction.reply(`
**Ping** - replies with pong
**Server** - sends info about this server
**User** - sends info about you
        `);
	},
};