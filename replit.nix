
{ pkgs }: {
  deps = [
    pkgs.tree
    pkgs.nodejs_20
    pkgs.nodePackages.npm
    pkgs.nodePackages."@angular/cli"
  ];
}
