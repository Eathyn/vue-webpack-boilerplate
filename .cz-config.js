function generateTypeInfo(typeName, explanation) {
  const formattedTypeName = `${typeName}:`.padEnd(12, ' ')
  return `${formattedTypeName}${explanation}`
}

module.exports = {
  types: [
    {
      value: 'feat',
      name: generateTypeInfo('feat', 'A new feature'),
    },
    {
      value: 'fix',
      name: generateTypeInfo('fix', 'A bug fix'),
    },
    {
      value: 'docs',
      name: generateTypeInfo('docs', 'Documentation only changes'),
    },
    {
      value: 'style',
      name: generateTypeInfo(
        'style',
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      ),
    },
    {
      value: 'refactor',
      name: generateTypeInfo(
        'refactor',
        'A code change that neither fixes a bug nor adds a feature',
      ),
    },
    {
      value: 'perf',
      name: generateTypeInfo('perf', 'A code change that improves performance'),
    },
    {
      value: 'test',
      name: generateTypeInfo(
        'test',
        'Adding missing tests or correcting existing tests',
      ),
    },
    {
      value: 'build',
      name: generateTypeInfo(
        'build',
        'Changes that affect the build system or external dependencies (gulp, broccoli, npm, etc)',
      ),
    },
    {
      value: 'chore',
      name: generateTypeInfo(
        'chore',
        'Changes to the build process or auxiliary tools and libraries such as documentation generation',
      ),
    },
    {
      value: 'revert',
      name: generateTypeInfo('revert', 'Revert to a commit'),
    },
    {
      value: 'ci',
      name: generateTypeInfo('ci', 'Reverts a previous commit'),
    },
  ],

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'footer'],
  subjectLimit: 100,
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
