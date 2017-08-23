<template lang="pug">
#home
	section.hero.is-primary
		.hero-body
			.container
				h1.title #[markdown-mark.md-icon(color='white')] Marked File
				h1.subtitle Parse markdown file to #[b-icon(icon='html5')] HTML on browser.
	section.section
		form.container(@submit.prevent='', ref='upload-form')
			h1#md-file.title Markdown File
			h2.subtitle Upload your markdown file.
			b-field.has-text-centered
				b-upload(v-model='files', required, accept='.md', drag-drop, @input='onFileInput')
					section.section
						.content.has-text-centered
							p
								b-icon(icon='upload', size='is-large')
							p Drop your markdown file here or click to upload
	section.section(v-if='hasResult')
		.container
			h1#html-file.title HTML File
			h2.subtitle Parsed HTML file.
			#copy-button-container.has-text-right
				b-tooltip(label='Copy HTML result to clipboard', type='is-dark', animated)
					button.button.is-info(
						v-clipboard:copy='parsedMarkdown',
						v-clipboard:success='onCopySuccess',
						v-clipboard:error='onCopyError'
					)
						b-icon(icon='clipboard')
						span Copy
			b-field
				b-input(type='textarea', rows='10', readonly, v-model='parsedMarkdown')
	footer.footer
		.container
			.content.has-text-centered
				p Made with ❤️ by #[blank-link(url='https://gitlab.com/gluons') Saran Tanpituckpong]
				p
					blank-link(url='https://gitlab.com/gluons/marked-file') #[b-icon.gitlab-icon(icon='gitlab')] View on GitLab
</template>

<script>
import { fileToString, isStringNullOrEmpty, parseMarkdown } from '~/lib';

export default {
	data() {
		return {
			files: [],
			parsedMarkdown: null
		};
	},
	computed: {
		hasResult() {
			return !isStringNullOrEmpty(this.parsedMarkdown);
		}
	},
	methods: {
		resetForm() {
			let uploadForm = this.$refs['upload-form'];
			if (uploadForm.reset) {
				uploadForm.reset();
			}
		},
		jumpToHTML() {
			this.$nextTick(() => {
				this.$jump('#html-file');
			});
		},
		async onFileInput() {
			if (this.files && this.files.length > 0) {
				let file = this.files[0];
				let fileContent = await fileToString(file);
				this.parsedMarkdown = parseMarkdown(fileContent);

				// Reset form after get file.
				this.resetForm();

				// Show success message after parse file
				this.$toast.open({
					message: '✔️ Parse succeed.',
					type: 'is-success'
				});

				// Jump to HTML result
				this.jumpToHTML();
			}
		},
		onCopySuccess() {
			this.$toast.open({
				message: '✔️ Copied.',
				type: 'is-success'
			});
		},
		onCopyError() {
			this.$toast.open({
				message: '❌ Copy fail.',
				type: 'is-danger'
			});
		}
	}
};
</script>


<style lang="scss">
#home {
	.hero {
		.md-icon {
			max-height: 2rem;
		}
	}
	#copy-button-container {
		margin: 1em 0;
	}
	footer {
		.gitlab-icon {
			color: #e24329;
		}
	}
}
</style>
