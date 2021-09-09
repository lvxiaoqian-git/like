import { Home } from "../page/Home";
import {ReactChildren} from "react"
import {
  BrowserRouter as Router,
  Link,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import { IUploadOptions } from "@testing-library/user-event";

export const routes: Array<RouteProps> = [
  {
    path: "/",
  },
];

// .......哈哈哈哈是数组 啊
// 你这个永不用自己定义types什么的
// 有的话我给你弄下？？？？接口？

// 你有用eslint吗搞一下
// 脚手架自带的
// 然后我那个项目里这块一个error warning都没有 嘎嘎好吧

function name() {
  return (
    <div>
      {routes.map((item) => {
        return <Link to={item.path}> dsa</Link>;
      })}
    </div>
  );
}
// 感觉自带的lint就够了吧，只要语法提示好着呢就行了，人家库的东西肯定有语法提示的，自己的就不一定了阿这


//稍等
// 我忽然反应过来，你这就根本就是一个普通的数组，哪里来的types
// 在哪里引用的这个路由对象
// 我给你找下

// 稍等 

const a = '';
// IUserState
// (a as unknown as IUserState)
// 没引进来

// ctrl按住点进去，点到那里，他用的类型声明就是哪里


// AnimationEvent
// 雖然他是個空的，但是推斷和提示走的是類型聲明
// 你现在要做的是给自己常用的封装的api以及别的什么的添加类型声明挂载上去，你这个src下添加types挂不上去，跟Vue不太一样



// d.ts是可以提供語法提示的以及類型推斷