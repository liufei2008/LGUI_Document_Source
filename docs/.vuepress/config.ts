import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from "@vuepress/theme-default"
import { searchPlugin } from "@vuepress/plugin-search"

export default {
    locales: {
        '/': {
            lang: 'en-US',
        },
        "/zh-cn/": {
            lang: '中文',
        }
    },
    base: "/LGUIDoc/",
    dest: "$(sourceDir)/../../liufei2008.github.io/LGUIDoc",
    plugins: [
      searchPlugin({}),  
    ],
    bundler: viteBundler(),
    theme: defaultTheme({
        locales: {
            '/':
            {
                colorModeSwitch: true,
                selectLanguageText: 'Languages',
                selectLanguageName: 'English',
                selectLanguageAriaLabel: 'Languages',
                editLink: true,
                editLinkText: 'Edit this page on Github',
                logo: "logo.png",
                navbar: [
                    { text: "Home", link: '/' },
                ],
                sidebar: [
                    {
                        text: 'Get Started',
                        collapsible: true,
                        children: [
                            '/GetStarted/Install/',
                            '/GetStarted/HelloWorld/',
                            '/GetStarted/CustomButton/',
                            '/GetStarted/Font/',
                            '/GetStarted/Prefab/',
                            '/GetStarted/Interaction/',
                            '/GetStarted/CreateButton/',
                        ]
                    },
                    {
                        text: 'Sample Projects',
                        collapsible: true,
                        children: [
                            '/SampleProjects/'
                        ]
                    },
                    {
                        text: 'Prefab Workflow',
                        collapsible: true,
                        children: [
                            '/PrefabWorkflow/Prefab/',
                            '/PrefabWorkflow/PrefabEditor/',
                            '/PrefabWorkflow/LGUILifeCycleBehaviour/',
                            '/PrefabWorkflow/LGUIPrefabInterface/',
                        ]
                    },
                    {
                        text: 'Rendering',
                        collapsible: true,
                        children: [
                            '/Rendering/LGUICanvas/',
                            '/Rendering/ScreenSpaceUI/',
                            '/Rendering/WorldSpaceUERenderer/',
                            '/Rendering/WorldSpaceLGUIRenderer/',
                            '/Rendering/LGUIRenderFlow/',
                            '/Rendering/UICanvasGroup/',
                        ]
                    },
                    {
                        text: "Visual Components",
                        collapsible: true,
                        children: [
                            // '/Rendering/UISprite/',
                            // '/Rendering/UITexture/',
                            '/VisualComponents/UIText/',
                            // '/Rendering/UIExtensionElements/',
                            '/VisualComponents/UIEffect/',
                            '/VisualComponents/TextAnimation/',
                            '/VisualComponents/UIBackgroundBlur/',
                            '/VisualComponents/UIBackgroundPixelate/',
                        ]
                    },
                    {
                        text: 'Events',
                        collapsible: true,
                        children: [
                            '/Events/LGUIEventDelegate/',
                            '/Events/LGUIEventSystem/',
                        ]
                    },
                    {
                        text: 'Interaction Components',
                        collapsible: true,
                        children: [
                            '/InteractionComponents/UISelectable/'
                        ]
                    },
                    {
                        text: 'Layout',
                        collapsible: true,
                        children: [
                            '/Layout/UIItem/',
                            '/Layout/AutoLayout/',
                        ]
                    },
                    {
                        text: 'Tween Animation',
                        collapsible: true,
                        children: [
                            '/LTween/Document/',
                            '/LTween/LGUI/',
                        ]
                    },
                    {
                        text: 'Performance',
                        collapsible: true,
                        children: [
                            '/Performance/'
                        ]
                    },
                    {
                        text: 'ReleaseNotes',
                        collapsible: true,
                        children: [
                            '/ReleaseNotes/v3/',
                            '/ReleaseNotes/v2/',
                        ]
                    },
                    {
                        text: 'FAQ',
                        collapsible: true,
                        children: [
                            '/FAQ/WhyPrefab/',
                            '/FAQ/UpdateTo3/',
                            '/FAQ/ProjectWorldToScreen/',
                            '/FAQ/DeprojectScreenToWorld/',
                            '/FAQ/CustomMaterial/',
                            '/FAQ/DisableInteractionComponent/',
                            '/FAQ/FindChildByDisplayName/',
                            '/FAQ/GetActorInsidePrefab/',
                            '/FAQ/Antialiasing/',
                        ]
                    }
                ]
            },
            '/zh-cn/':
            {
                selectLanguageText: '选择语言',
                selectLanguageName: '中文',
                selectLanguageAriaLabel: 'Languages',
                editLinkText: '在Github上编辑此页面',
                logo: "Icon.png",
                navbar: [
                    { text: "主页", link: '/zh-cn/' },
                ],
                sidebar: [
                    {
                        text: '起步',
                        collapsible: true,
                        children: [
                            '/zh-cn/GetStarted/Install/',
                            '/zh-cn/GetStarted/HelloWorld/',
                            '/zh-cn/GetStarted/CustomButton/',
                            '/zh-cn/GetStarted/Font/',
                            '/zh-cn/GetStarted/Prefab/',
                            '/zh-cn/GetStarted/Interaction/',
                            '/zh-cn/GetStarted/CreateButton/',
                        ]
                    },
                    {
                        text: '样例工程',
                        collapsible: true,
                        children: [
                            '/zh-cn/SampleProjects/'
                        ]
                    },
                    {
                        text: '常见问题',
                        collapsible: true,
                        children: [
                            '/zh-cn/FAQ/WhyPrefab/',
                            // '/FAQ/UpdateTo3/',
                            '/zh-cn/FAQ/ProjectWorldToScreen/',
                            '/zh-cn/FAQ/DeprojectScreenToWorld/',
                            // '/FAQ/CustomMaterial/',
                            // '/FAQ/DisableInteractionComponent/',
                            '/zh-cn/FAQ/FindChildByDisplayName/',
                            '/zh-cn/FAQ/GetActorInsidePrefab/',
                            '/zh-cn/FAQ/Antialiasing/',
                        ]
                    }
                ]
            }
        },
    }),
}