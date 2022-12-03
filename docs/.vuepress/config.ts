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
        { title: ".vuepress", children: [["config.ts", "config.ts"]] },
        {
          title: "other",
          children: [
            ["adb.md", "adb.md"],
            [
              "the use guidance of jupyter notebook.md",
              "the use guidance of jupyter notebook.md",
            ],
            ["调试pdb.ipynb", "调试pdb.ipynb"],
          ],
        },
        {
          title: "virtual environment",
          children: [
            ["conda.md", "conda.md"],
            ["pip.md", "pip.md"],
            ["requirements.md", "requirements.md"],
            ["virtualenv.md", "virtualenv.md"],
          ],
        },
        { title: "压缩", children: [["pickle.md", "pickle.md"]] },
        {
          title: "命令行",
          children: [
            ["readme.md", "readme.md"],
            ["sh.ipynb", "sh.ipynb"],
            ["sh.py", "sh.py"],
            ["tmp_log.log", "tmp_log.log"],
          ],
        },
        {
          title: "图像",
          children: [
            ["1.jpg", "1.jpg"],
            ["PIL.ipynb", "PIL.ipynb"],
            ["ffmpy.md", "ffmpy.md"],
            ["skvideo.io.ipynb", "skvideo.io.ipynb"],
          ],
        },
        { title: "声音处理", children: [["pydub.md", "pydub.md"]] },
        {
          title: "控制台效果",
          children: [
            ["color.md", "color.md"],
            ["print.md", "print.md"],
            ["进度条.ipynb", "进度条.ipynb"],
          ],
        },
        { title: "读写文件", children: [["filename.ipynb", "filename.ipynb"]] },
        {
          title: "路径",
          children: [
            ["os.md", "os.md"],
            ["readme.md", "readme.md"],
            ["t.ipynb", "t.ipynb"],
          ],
        },
        {
          title: "配置",
          children: [
            {
              title: "读取命令行",
              children: [
                ["argparse.md", "argparse.md"],
                ["readme.md", "readme.md"],
                ["sys and getopt.md", "sys and getopt.md"],
              ],
            },
            {
              title: "配置文件",
              children: [
                ["regex.md", "regex.md"],
                {
                  title: "configargparse",
                  children: [
                    ["configargparse.md", "configargparse.md"],
                    ["some.ini", "some.ini"],
                    ["some.txt", "some.txt"],
                    ["some.yaml", "some.yaml"],
                    ["t.py", "t.py"],
                  ],
                },
                {
                  title: "csv",
                  children: [
                    ["csv.ipynb", "csv.ipynb"],
                    ["some.csv", "some.csv"],
                  ],
                },
                { title: "ini", children: [["ini.md", "ini.md"]] },
                {
                  title: "json",
                  children: [
                    ["json.ipynb", "json.ipynb"],
                    ["json.md", "json.md"],
                    ["some.json", "some.json"],
                  ],
                },
                {
                  title: "yaml",
                  children: [
                    ["some.yaml", "some.yaml"],
                    ["yaml.ipynb", "yaml.ipynb"],
                    ["yaml.md", "yaml.md"],
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
