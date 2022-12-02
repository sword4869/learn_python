import configargparse
parser = configargparse.ArgumentParser()
parser.add_argument('--config', is_config_file=True, help='config file path')
parser.add_argument("--num", default=0, type=int)
parser.add_argument("--no_cache", action='store_true')
parser.add_argument("--default_value", default=0, type=int)
parser.add_argument("--value", type=int)
parser.add_argument("--test", action='store_true')


args = parser.parse_args()
print(args)
print()
print(parser.format_values())