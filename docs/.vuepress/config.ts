import { defineConfig } from "vuepress/config";
export default defineConfig({
  title: "Hello Python",
  base: "/learn_python/",
  themeConfig: {
    // if your docs are in a different repo from your main project:
    docsRepo: "sword4869/learn_python",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "main",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // defaults to false,set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",

    sidebar: {
      "/": [
        ["/", "README"],
        {
          title: "other",
          children: [
            ["/other/adb.md", "adb.md"],
            [
              "/other/the use guidance of jupyter notebook.md",
              "the use guidance of jupyter notebook.md",
            ],
          ],
        },
        {
          title: "virtual environment",
          children: [
            ["/virtual environment/conda.md", "conda.md"],
            ["/virtual environment/pip.md", "pip.md"],
            ["/virtual environment/requirements.md", "requirements.md"],
            ["/virtual environment/virtualenv.md", "virtualenv.md"],
          ],
        },
        { title: "压缩", children: [["/压缩/pickle.md", "pickle.md"]] },
        { title: "命令行", children: [["/命令行/命令行.md", "命令行.md"]] },
        { title: "图像", children: [["/图像/ffmpy.md", "ffmpy.md"]] },
        { title: "声音处理", children: [["/声音处理/pydub.md", "pydub.md"]] },
        {
          title: "控制台效果",
          children: [
            ["/控制台效果/color.md", "color.md"],
            ["/控制台效果/print.md", "print.md"],
          ],
        },
        {
          title: "路径",
          children: [
            ["/路径/os.md", "os.md"],
            ["/路径/other.md", "other.md"],
          ],
        },
        {
          title: "配置",
          children: [
            {
              title: "读取命令行",
              children: [
                ["/配置/读取命令行/argparse.md", "argparse.md"],
                ["/配置/读取命令行/", "README"],
                ["/配置/读取命令行/sys and getopt.md", "sys and getopt.md"],
              ],
            },
            {
              title: "配置文件",
              children: [
                ["/配置/配置文件/regex.md", "regex.md"],
                {
                  title: "configargparse",
                  children: [
                    [
                      "/配置/配置文件/configargparse/configargparse.md",
                      "configargparse.md",
                    ],
                  ],
                },
                {
                  title: "ini",
                  children: [["/配置/配置文件/ini/ini.md", "ini.md"]],
                },
                {
                  title: "json",
                  children: [["/配置/配置文件/json/注意事项.md", "注意事项.md"], ["/配置/配置文件/json/json.html", "json.html"]],
                },
                {
                  title: "yaml",
                  children: [["/配置/配置文件/yaml/yaml.md", "yaml.md"]],
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
