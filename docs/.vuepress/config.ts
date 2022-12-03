import { defineConfig } from "vuepress/config";
export default defineConfig({
  title: "Hello Python",
  base: "/learn-python/",
  themeConfig: {
    // if your docs are in a different repo from your main project:
    docsRepo: "sword4869/learn_python",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "main",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",

    sidebar: {
      "/": [
        ["README.md", "README.md"],
        {
          title: ".vuepress",
          children: [["/.vuepress/config.ts", "config.ts"]],
        },
        {
          title: "other",
          children: [
            ["/other/adb.md", "adb.md"],
            [
              "/other/the use guidance of jupyter notebook.md",
              "the use guidance of jupyter notebook.md",
            ],
            ["/other/调试pdb.ipynb", "调试pdb.ipynb"],
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
        {
          title: "命令行",
          children: [
            ["/命令行/readme.md", "readme.md"],
            ["/命令行/sh.ipynb", "sh.ipynb"],
            ["/命令行/sh.py", "sh.py"],
            ["/命令行/tmp_log.log", "tmp_log.log"],
          ],
        },
        {
          title: "图像",
          children: [
            ["/图像/1.jpg", "1.jpg"],
            ["/图像/PIL.ipynb", "PIL.ipynb"],
            ["/图像/ffmpy.md", "ffmpy.md"],
            ["/图像/skvideo.io.ipynb", "skvideo.io.ipynb"],
          ],
        },
        { title: "声音处理", children: [["/声音处理/pydub.md", "pydub.md"]] },
        {
          title: "控制台效果",
          children: [
            ["/控制台效果/color.md", "color.md"],
            ["/控制台效果/print.md", "print.md"],
            ["/控制台效果/进度条.ipynb", "进度条.ipynb"],
          ],
        },
        {
          title: "读写文件",
          children: [["/读写文件/filename.ipynb", "filename.ipynb"]],
        },
        {
          title: "路径",
          children: [
            ["/路径/os.md", "os.md"],
            ["/路径/readme.md", "readme.md"],
            ["/路径/t.ipynb", "t.ipynb"],
          ],
        },
        {
          title: "配置",
          children: [
            {
              title: "读取命令行",
              children: [
                ["/配置//读取命令行/argparse.md", "argparse.md"],
                ["/配置//读取命令行/readme.md", "readme.md"],
                ["/配置//读取命令行/sys and getopt.md", "sys and getopt.md"],
              ],
            },
            {
              title: "配置文件",
              children: [
                ["/配置//配置文件/regex.md", "regex.md"],
                {
                  title: "configargparse",
                  children: [
                    [
                      "/配置//配置文件//configargparse/configargparse.md",
                      "configargparse.md",
                    ],
                    ["/配置//配置文件//configargparse/some.ini", "some.ini"],
                    ["/配置//配置文件//configargparse/some.txt", "some.txt"],
                    ["/配置//配置文件//configargparse/some.yaml", "some.yaml"],
                    ["/配置//配置文件//configargparse/t.py", "t.py"],
                  ],
                },
                {
                  title: "csv",
                  children: [
                    ["/配置//配置文件//csv/csv.ipynb", "csv.ipynb"],
                    ["/配置//配置文件//csv/some.csv", "some.csv"],
                  ],
                },
                {
                  title: "ini",
                  children: [["/配置//配置文件//ini/ini.md", "ini.md"]],
                },
                {
                  title: "json",
                  children: [
                    ["/配置//配置文件//json/json.ipynb", "json.ipynb"],
                    ["/配置//配置文件//json/json.md", "json.md"],
                    ["/配置//配置文件//json/some.json", "some.json"],
                  ],
                },
                {
                  title: "yaml",
                  children: [
                    ["/配置//配置文件//yaml/some.yaml", "some.yaml"],
                    ["/配置//配置文件//yaml/yaml.ipynb", "yaml.ipynb"],
                    ["/配置//配置文件//yaml/yaml.md", "yaml.md"],
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
