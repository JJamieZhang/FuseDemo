const fuseSettingsConfig = {
    layout          : {
        style : 'layout1',
        config: {
            scroll : 'content',
            navbar : {
                display : true,
                folded  : true,
                position: 'left'
            },
            toolbar: {
                display : true,
                style   : 'fixed',
                position: 'below'
            },
            footer : {
                display : true,
                style   : 'fixed',
                position: 'below'
            },
            leftSidePanel : {
                display : true,
            },
            rightSidePanel : {
                display : true,
            },
            mode   : 'fullwidth'
        }
    },
    customScrollbars: true,
    theme           : {
        main   : 'default',
        navbar : 'mainThemeDark',
        toolbar: 'mainThemeLight',
        footer : 'mainThemeDark'
    }
};

export default fuseSettingsConfig;