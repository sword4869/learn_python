import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
title: "Hello sword/learn_python",
base: "/learn_python/",
theme: hopeTheme(
{
    "repo": "sword/learn_python",
    "docsDir": "docs",
    "sidebar": {
        "/": [
            {
                "text": "README",
                "link": "/"
            },
            {
                "text": "other",
                "children": [
                    {
                        "text": "adb.md",
                        "link": "/other/adb.md"
                    },
                    {
                        "text": "the use guidance of jupyter notebook.md",
                        "link": "/other/the use guidance of jupyter notebook.md"
                    }
                ]
            },
            {
                "text": "virtual environment",
                "children": [
                    {
                        "text": "README",
                        "link": "/virtual environment/"
                    },
                    {
                        "text": "conda.md",
                        "link": "/virtual environment/conda.md"
                    },
                    {
                        "text": "pip.md",
                        "link": "/virtual environment/pip.md"
                    },
                    {
                        "text": "pyinstaller.md",
                        "link": "/virtual environment/pyinstaller.md"
                    },
                    {
                        "text": "requirements.md",
                        "link": "/virtual environment/requirements.md"
                    },
                    {
                        "text": "virtualenv.md",
                        "link": "/virtual environment/virtualenv.md"
                    }
                ]
            },
            {
                "text": "加密",
                "children": [
                    {
                        "text": "base64.md",
                        "link": "/加密/base64.md"
                    },
                    {
                        "text": "hash.md",
                        "link": "/加密/hash.md"
                    }
                ]
            },
            {
                "text": "压缩",
                "children": [
                    {
                        "text": "pickle.md",
                        "link": "/压缩/pickle.md"
                    }
                ]
            },
            {
                "text": "命令行",
                "children": [
                    {
                        "text": "adb.md",
                        "link": "/命令行/adb.md"
                    },
                    {
                        "text": "命令行.md",
                        "link": "/命令行/命令行.md"
                    }
                ]
            },
            {
                "text": "多媒体",
                "children": [
                    {
                        "text": "ffmpeg.md",
                        "link": "/多媒体/ffmpeg.md"
                    },
                    {
                        "text": "图像",
                        "children": [
                            {
                                "text": "PIL.md",
                                "link": "/多媒体/图像/PIL.md"
                            }
                        ]
                    },
                    {
                        "text": "视频",
                        "children": [
                            {
                                "text": "ffmpy.md",
                                "link": "/多媒体/视频/ffmpy.md"
                            },
                            {
                                "text": "skvideo_io.md",
                                "link": "/多媒体/视频/skvideo_io.md"
                            }
                        ]
                    },
                    {
                        "text": "语音",
                        "children": [
                            {
                                "text": "pyaudio.md",
                                "link": "/多媒体/语音/pyaudio.md"
                            },
                            {
                                "text": "pydub.md",
                                "link": "/多媒体/语音/pydub.md"
                            },
                            {
                                "text": "recognition_paddle.md",
                                "link": "/多媒体/语音/recognition_paddle.md"
                            },
                            {
                                "text": "recongition_xunfei.md",
                                "link": "/多媒体/语音/recongition_xunfei.md"
                            },
                            {
                                "text": "wave.md",
                                "link": "/多媒体/语音/wave.md"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "小错误",
                "children": [
                    {
                        "text": "README",
                        "link": "/小错误/"
                    }
                ]
            },
            {
                "text": "控制台效果",
                "children": [
                    {
                        "text": "color.md",
                        "link": "/控制台效果/color.md"
                    },
                    {
                        "text": "f-format.md",
                        "link": "/控制台效果/f-format.md"
                    },
                    {
                        "text": "logger.md",
                        "link": "/控制台效果/logger.md"
                    },
                    {
                        "text": "progressbar.md",
                        "link": "/控制台效果/progressbar.md"
                    }
                ]
            },
            {
                "text": "时间",
                "children": [
                    {
                        "text": "GMT.md",
                        "link": "/时间/GMT.md"
                    },
                    {
                        "text": "time.md",
                        "link": "/时间/time.md"
                    }
                ]
            },
            {
                "text": "算法",
                "children": [
                    {
                        "text": "排序.md",
                        "link": "/算法/排序.md"
                    }
                ]
            },
            {
                "text": "线程",
                "children": [
                    {
                        "text": "threading.md",
                        "link": "/线程/threading.md"
                    }
                ]
            },
            {
                "text": "语法糖",
                "children": [
                    {
                        "text": "Optional.md",
                        "link": "/语法糖/Optional.md"
                    },
                    {
                        "text": "dict.md",
                        "link": "/语法糖/dict.md"
                    },
                    {
                        "text": "exception.md",
                        "link": "/语法糖/exception.md"
                    },
                    {
                        "text": "itemgetter.md",
                        "link": "/语法糖/itemgetter.md"
                    }
                ]
            },
            {
                "text": "路径",
                "children": [
                    {
                        "text": "os.md",
                        "link": "/路径/os.md"
                    },
                    {
                        "text": "other.md",
                        "link": "/路径/other.md"
                    },
                    {
                        "text": "python路径.md",
                        "link": "/路径/python路径.md"
                    },
                    {
                        "text": "相对路径.md",
                        "link": "/路径/相对路径.md"
                    }
                ]
            },
            {
                "text": "通知",
                "children": [
                    {
                        "text": "email.md",
                        "link": "/通知/email.md"
                    },
                    {
                        "text": "winsound.md",
                        "link": "/通知/winsound.md"
                    }
                ]
            },
            {
                "text": "配置",
                "children": [
                    {
                        "text": "读取命令行",
                        "children": [
                            {
                                "text": "argparse.md",
                                "link": "/配置/读取命令行/argparse.md"
                            },
                            {
                                "text": "README",
                                "link": "/配置/读取命令行/"
                            },
                            {
                                "text": "sys and getopt.md",
                                "link": "/配置/读取命令行/sys and getopt.md"
                            }
                        ]
                    },
                    {
                        "text": "配置文件",
                        "children": [
                            {
                                "text": "regex.md",
                                "link": "/配置/配置文件/regex.md"
                            },
                            {
                                "text": "configargparse",
                                "children": [
                                    {
                                        "text": "configargparse.md",
                                        "link": "/配置/配置文件/configargparse/configargparse.md"
                                    }
                                ]
                            },
                            {
                                "text": "ini",
                                "children": [
                                    {
                                        "text": "ini.md",
                                        "link": "/配置/配置文件/ini/ini.md"
                                    }
                                ]
                            },
                            {
                                "text": "json",
                                "children": [
                                    {
                                        "text": "json.md",
                                        "link": "/配置/配置文件/json/json.md"
                                    },
                                    {
                                        "text": "注意事项.md",
                                        "link": "/配置/配置文件/json/注意事项.md"
                                    }
                                ]
                            },
                            {
                                "text": "yaml",
                                "children": [
                                    {
                                        "text": "yaml语法.md",
                                        "link": "/配置/配置文件/yaml/yaml语法.md"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
)
});
