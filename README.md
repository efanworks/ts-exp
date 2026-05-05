## 版本号控制工作流

原则：代码变更、版本号升级分开

1. 功能开发中，无需关注版本号
2. 功能开发完成，按功能侵入性确定要变更 major｜minor｜patch 中的哪一个
3. 升级到 alpha 版本用于测试，参考[alpha版本号更新](#Alpha-版本号更新)
4. 发布 alpha package：npm publish --tag alpha
5. bugfix 阶段，通常只需累加 alpha 版本号，参考[alpha版本号更新](#Alpha-版本号更新)-升 alpha 号
6. 开发、测试完成，升级到正式版本号 npm version major|minor|patch
7. 发布正式版 npm publish --tag latest

## Alpha Package 版本号更新

升 major 版本号

```bash
npm version premajor --preid alpha
```

升 minor 版本号

```bash
npm version preminor --preid alpha
```

升 patch 版本号

```bash
npm version prepatch --preid alpha
```

升 alpha 号

```bash
npm version prerelease
```
