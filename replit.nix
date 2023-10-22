{ pkgs }: {
  deps = [
    pkgs.python39Packages.pip
    pkgs.nodejs-16_x
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}