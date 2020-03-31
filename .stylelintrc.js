module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'indentation': 4,
        'max-empty-lines': 2,
        'property-no-unknown': [true, {
            'ignoreProperties': ['composes']
        }],
        'selector-pseudo-class-no-unknown': [true, {
            'ignorePseudoClasses': ['global'],
        }],
        'unit-whitelist': ['rem', 'px', 's', '%', 'vh', 'vw', 'deg', 'ms'],
        'at-rule-no-unknown': null,
    }
};
