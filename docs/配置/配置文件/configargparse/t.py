import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", default=0, type=int)
parser.add_argument("--no_cache", action='store_true')

cmd = '--config ./some.txt --no_cache'
parser.parse_args(cmd)
print(parser.parse_args(cmd))
print()
print(parser.format_values())