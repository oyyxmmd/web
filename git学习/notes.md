今天学习了git的使用 以及更快速的CDN马云 gitee：
tips：git工作原理是通过add将修改推送到缓存区，再commit提交才生效。commit的上一步一定是add！！！！

1.下面是主要命令
  git clone
  git remote add / rm
  git add
  git commit  
  git push "" "分支名（默认master主）"  提交远程仓库
  git checkout -- 

2.使用的问题 programs
  生成公钥报错：ivolde  本机rsa密钥未生成，ssh-keygen命令，生成的密钥存在 /.ssh/id_rsa.pub
  首次提交远程仓库报错（首次没有clone）：提示不是最新版本！  删除自动生成的仓库文件（清空仓库）
  commit未提交的问题主：add 之前生效，之后的修改不生效（参考 git工作流程）
