
/**记录引擎中解决的一些问题，节约同类问题的解决时间*/
export module record {

    /**
       * 关于引擎
       * 打括号的是刚体属性，不打括号的是问题名称
       */
    export enum Engine {

        'atlas' = '当图集不在索引中，或者无法更新打包时，可以在bin文件夹下手动添加需要用到的图片和文件夹，这样的用以就是不打包，直接用',

        '修改文件夹名字' = '在左边修改文件夹名称不会导致图片资源丢失，会直接映射到游戏中，所以增删改查都在左边进入，下面制作展示和拖入',

        'spine_01(骨骼动画)' = '不知道为什么添加了spine(骨骼动画)，然后骨骼动画的图片设置成不打包之后，fileconfig.json文件就不更新打包信息了',

        'skeleton(骨骼动画)' = '骨骼动画所用到的图片是不可以打包的，否则取图片时候图片会错乱',

        'fileconfig.json(索引文件)' = 'atlas打包了，索引文件中找不到，可以把图片名称添加到fileconfig.json中',
        '库文件' = '如果F9中的库文件没有勾选，那么相对应的模块不能用new创建，但是可以用 Laya.模块 的类型声明',

        '首次加载出现卡顿' = '有时候第一次添加一张很小的图时，都会卡，有些界面进入第一次也会卡，这些图片和界面包括资源都进行了预加载，可是依然很卡，猜测的原因是因为图片虽然加载了，但是绘制到屏幕可能依然需要消耗性能，那么第一次加载到屏幕可能会因为这张图片在一张很大的合图中，如果这张图片很小，又会单独创建，可以不合图，或者这张图可以在加载界面取出进行第一次绘制，然后关闭',

        '所有节点，都以img为基础' = 'sprite功能太少，img格式在是空节点时，会有一个框，其他功能多于sprite，索性全用img',

        '执行域1' = '执行域的作用之一，追踪一些事件和方法的执行者，this便是这些事件和方法的执行者，对象{}，类calss，模块module都可以作为执行域，他们都有this，执行域必须在可控范围内，否则会导致事件重叠或者无法清除这些事件',

        '执行域2' = '点击事件的执行域为当前脚本，特效的执行域是一次性的，可以在临时执行域{}或者单例中，结束时清理',

        '执行域3' = '循环的执行域可以用new出来的对象{}当做执行域，方便舍弃，如果需要关闭当前界面特效就结束，可以用当前脚本当做执行域，否则关闭脚本和场景，虽然图片不在，但是循环依然在进行，显然增加了性能消耗',

        '执行事件Event' = '事件注册可以注册在onAweak中或者onEnable中，但是执行的时候不要执行在onAweak中或者onEnable中，执行在onStart中，否则可能会报错',

        '节点或场景关闭时机问题' = '节点或场景上如果有脚本，不可以在onAweak中或者onEnable中关闭或者移除，否则会导致此节点没有初始化完成就被关闭了，会报错，如果要立即关闭场景，则在onStart中执行关闭和移除操作',

        '项目库文件勾选' = '2D项目必须用删除所有3D库文件，否则可能会导致某些不必要的计算；无论是2D还是3D最好删除不必要的库文件',

        'mask遮罩问题1' = '节点如果为Image,那么它的遮罩必须为mask，否则可能会导致一些显示问题',
        'mask遮罩问题2' = '有遮罩的图片的坐标必须是整数，不能有小数，否则可能导致遮罩有一根细线的存在，可能是遮罩只会遮罩整数坐标，导致计算错误',

        '截屏对应源码修改' = '截屏  var htmlCanvas: Laya.HTMLCanvas = this.Owner.drawToCanvas(this.Owner.width, this.Owner.height, 0, 0);htmlCanvas.toBase64("image/png"),对应core中的源码修改，才可以上传平台，被平台识别，搜索‘ImageData’，如下:// var imgdata=/*__JS__ */new ImageData(canvasWidth,canvasHeight); //注释这一句，这句是报错的地方;   var canvx = new HTMLCanvas(true); //创建一个canvas,canvx.size(canvasWidth, canvasHeight); //设置宽高;这个和ImageData保持一致;  var ctx2dx = canvx.getContext(`2d`); //获取上下文;var imgdata = ctx2dx.getImageData(0,0,canvasWidth,canvasHeight); //获取imageData，来替代ImageData;',

        '2Dtexture' = '2Dtexture不需要打包，一般在unity中导出，如果在laya中也要设置不打包',

        'drawToTexture()和drawToCanvas()' = '这两个截图方法都是在新建的canves对象上进行绘制的，这个canves应该默认是舞台或者是设计宽度，所以其中的偏移量应该恰好是绘制的sprite的x，y，才能够刚好进行截图，所以根据sprite的宽高即可控制截图的大小，有时候截不到图，应该是x，y的偏移量问题，宽高和坐标都是sprite的即可',

        '每次赋值新贴图Texture/Texture2D的时候，旧的贴图要删掉' = 'destroy()掉，否则内存增加很快，尤其是用drawToTexture()和drawToCanvas()绘制的行的贴图',

        'texture/texture2D的引用属性' = '贴图如果不new出一个的话，多个sprite用同一个贴图的时候，销毁其中一个贴图必然会引发其他贴图消失，因为是引用关系',

    }
    /**
     * 关于2d物理引擎
     * 打括号的是刚体属性，不打括号的是问题名称
     */
    export enum Box2d {
        allowSleep = '这个属性是休眠，默认开启，操作过一次后，可能就休眠了，所以如果需要平凡操作，一定要记得打开',
        bullet = '这个属性防止高速穿透',
        dynamic = 'dynamic物理类型，是运动类型，无论是自由运动，通过力来运动，通过坐标移动，都可以可以产生碰撞反应，坐标移动的话，可以做如下设置this.rig.setVelocity({ x: 0, y: 0 });',

        'childMove' = '子节点刚体不会跟着主节点的移动而移动，所以在update里面可以设置子节点跟随，或者建立多个刚体,此方法在相互碰撞中可能会产生问题',
        'BoxCollider' = '方形碰撞框，目前是以两个物体的第一次碰到的边作为进入碰撞，持续碰撞，结束碰撞来计算的，所以对碰撞框是有要求的，例如父节点的box被挤压后，有穿透，带着子节点位移了，很容易就会结束碰撞',

        'Laya.Physics.I.worldRoot=scene' = '物理世界根节点，有时候需要整体移动物理世界，可以将物理世界根节点设置为场景，这样的话可以整体移动场景，物理世界将一起移动，其他节点似乎不可以；如果不这么做，必须分别移动带有物理的节点，才可以，很麻烦，也可以',
    }

    export enum Unity {
        size = '一个模型真实大小测量方法，1、给一个模型增加一个boxCollider组件，此时会自动计算物体的长宽高，并且显示在boxcollider中;2、如果需要调整模型的大小，用scale，这时候会自动调整boxcollider的大小，无需手动调整，但是boxcollider的长宽高数字并不会发生改变，不需要改变这个值。那么此时模型的大小就是boxcollider.size*scale;3.如果物体的父节点也发生了scale缩放，则模型的真实大小为boxcollider.size*scale*parent.size；4、如果父节点还有父节点发生了缩放，那么逐级进行*parent.size',

        IsTrigger = '在box中，这个IsTrigger表示是否为触发器，如果IsTrigger=true，则不受物理属性影响，并且需要用onTriggerEnter进行碰撞检测，如果为false，则用onCollisionEnter方法检测碰撞；如果一个为true另一个为false的两个物体碰撞，那么在他们的挂载的脚本中，检测碰撞也是不一样的，必须和IsTrigger所匹配'
    }

    /**一些变量的初始化*/
    export enum Init {
        new = '声明引用变量，必须初始化，否则无法直接赋值，例如 provide point ：Laya.point,可以直接写成provide point ：Laya.Point = new Laya.Point();'
    }

    /**一些变量的初始化*/
    export enum Script {
        parentClass = '目前脚本内部很多通用方法，例如开场动画，消失动画，时间注册，self节点属性，等一些通用属性和方法，需要写个父类，然后开始直接运行父类的这些方法，就可以起到整合作用，不用每次都声明',
    }

    /**解谜游戏中需要注意的问题*/
    export enum Riddle {
        '(Room)房子的结构' = '移动物体的位置，所有房子必须满足PovitX和PovitY必须在房子的左上角，这样统一计算位置偏移',

        '(Room)房子的名称' = '房子的名称必须是唯一的旋转用的Room+需要，房子里面的物体名称要加上房子的名称',

        '(Room)房子的中心点' = '房子的中心点，暂时设置在房子的正中间，在属性列表里面修改，这样更加精确',

        '(Floor)地板的宽度' = '地板的宽度不短于房子的宽度，一般要略长于房子的长度，判断碰撞方便',

        '(Floor)悬空地板的宽度' = '悬空地板的宽度和普通地板的宽度一样，靠近墙壁的那一边必须不短于房子的宽度',

        '(Floor)地板的名字' = '地板的名字后面加上，房间的名称,例如"_Room1",这样可以肯定判定属于哪个房间，假如因为一点穿透，碰到了2个地板，可以通过名字来判定属于哪个房间',

        '(Floor)中间地板的高度要高一些' = '中间地板的高度要高一些，房子吸附时瞬间移动距离过大，出地板，和地板分离进入空状态，掉下去，因为没有范围控制',


        '(Person)角色刚开始的状态' = '角色当前无论属于哪个房间，刚开始必须放在和地板连接起来！',

        '(ladder)一个梯子配对一个上访通道' = '一个梯子配对一个上方通道的时候，两个物体命名规则必须是一样的顺序结尾利，例如ladder_01配对up_Aisle_01，ladder_02配对up_Aisle_02',

        '(ladder)梯子的命名' = '梯子的命名不需要加上房间名，因为第二个个房间的梯子和当前房间的梯子不会直接连接，否则没有意义，不如直接连接第二个梯子',

        '(Person)角色的方向需要通过播放不同方向的骨骼动画来改变' = '通过动画改变角色的方向最合适',

        '(Person)角色的碰撞框' = '角色的碰撞框高度需要大一些，否则可能会在出现吸附的时候，一帧内移动距离过大，出屏幕了，下一帧无法补回来了，并且需要给予角色移动范围',

        '(aisle)通道的碰撞框不要太宽' = '目前的碰撞是以最初的那个边来进行判断碰撞或者离开碰撞的，所以如果过大，房子挤压，可能会造成离开',

        '(aisle)通道必须紧密结合在一起' = '目前角色有三种状态，第一种是在梯子上，第二种是在地板上，第三种是在空中，如果离地过远，没有接触到另一个房间，那么可能就是在空中状态，会自由下落，不过可以做预防，如果角色离房间太远则拉到地板上',

        '(aisle)四个方向制作' = '通道的四个方向制作的时候，不要旋转方向，直接在当前方向制作，更加直观，修改方便；并且可以用4个prefab来动态添加通道',

        '(aisle)通道的中心点' = '目前通道的中心点放在房间的最边缘，X在房间的最边缘，Y在通道的中间，方便做吸附',

        '(aisle)通道旁边很近有墙壁的时候' = '拉宽通道的碰撞框，让碰到墙壁的时候也不出通道，这样就不会转向，因为转向需要重新碰撞',

        '(aisle)down通道的向上碰撞边缘需要高于地板' = '有一种情形，上下通道打通，并且上梯子更换了房间：梯子=》上通道（判断打开进入）=》另一房间下通道（下通道只有左右方向才判断，所以啥也不做）=》另一个房间地板，此时属于这个房间，并且改反向为左右=》接下来概率性会出现又碰到了下通道，因为有了左右方向，所以立即下去。此时，刚更换完房间，down通道依然打开，会立即下去，这是正确的逻辑，因为通道一直开着并且碰到了。但是我们的需求是这一次并不需要下去，因为直接下去，永远不会左右走了，进入不了第二个房间，所以这种情形下，为了玩家可以顺利进入下个房间，上去的这次应当不会碰到down通道，需要把down通道的碰撞框高度高于地板，即自换房间后，一直处于和下通道的碰撞中，只有左右走离开后，再次碰撞，才会触发下去的条件。',

        '(BtnSet)动态创建设置按钮' = '制作成预制体，节约拼关卡成本',
        '(KeyNum)动态创建钥匙显示' = '制作成预制体，节约拼关卡成本',
        '(BtnAgain)动态创建刷新按钮' = '制作成预制体，节约拼关卡成本',

        '(BelongRoom)角色行走的新思路' = '角色目前是在世界坐标内，连接不够紧密，还需要计算位置偏移，于是可以尝试另一种思路，每次角色必须在房间内，在房间内行走，一旦进入下一个房间需要进行如下操作：碰到通道=》进入下一个房间=》在总控制脚本内记录世界坐标和下个房间名称走向=》删掉自己=》总控制脚本从对象池创建一个新的角色=》通过世界坐标位置和新的房间计算出在新的房间内的位置和走向。这样的好处在于无限连接，不会出房间，并且可控。',

        '(moveDog)狗所在坐标系' = '移动狗和角色一样，必须在和角色在同一坐标系体系内，才可以用角色的脚本，一般分为两种，一种是房间坐标系，一种是世界坐标系，目前处于世界坐标系',

        '(wall)不可以同时碰撞墙壁和通道' = '加上房间有两层，在同一边上，上面一个通道，下面一个墙壁，此时墙壁短一些即可，防止角色同时碰到墙壁和通道，造成转向两次（等于没有转向）的情况！',

        '(wall)墙壁的高度' = '只有本房间内的墙壁才可以改变方向，防止房间相互撞击的时候，发生穿透，其他房间墙壁撞到角色了',
    }

    /**
     * 游戏中为解决bug
     * 打双引号的说明已解决或者解决后没有复现
    */
    export enum RiddleBug {
        'bug_01' = '连接过于平凡的时候，角色可能会掉下去，因为连接属于瞬间移动，那么这一帧当中，产生的距离如果过大，那么可能导致角色脱离地板，状态为空，下一帧补不回来，则直接掉下',

        bug_01Pre = '这个问题可以做一个房间范围控制，下一帧的时候，拉回来,碰到地板即可',

        bug_02Pre = '左右频繁连接断开，概率性出现角色掉下，大概复现方法，左右频繁连接后，来到第二个房间，此时第二个房间的通道断开了，然后碰到了这个通道，发现关闭后立即反向，直接出房间。原因可能是状态置空没做好，或者是和down通道一样，碰撞宽度要拉长到房间内，这样保持进入房间依然属于通道连接状态，不会发生再次碰撞，然后走了一段路才会离开通道，这样刚开始不会再和通道碰撞',
    }

    /**
     * 游戏中为解决bug
     * 打双引号的说明已解决或者解决后没有复现
     */
    export enum Node {
        mouseEnabled = '节点上的这个属性为true时，可以注册点击事件，为false时，不触发点击事件！',
        '节点的长宽' = '节点的属性面板中，无论是sprite还是img只要在游戏中需要改变其图片，并且图片的大小发生了变化，只需要把节点的长宽变为空值auto即可，如果不变为auto，无论怎么换图片都是一样的大小，会压缩或者拉伸'
    }


    export enum Laya3D {
        '_defaultPhysicsMemory' = '如果出现内存不够的情况‘abort Cannot enlarge memory arrays’，在Laya.d3.js中的构造函数中改变this._defaultPhysicsMemory = 512;',
        '单个资源加载过大' = '如果某个3D资源，比如场景，预制体过大，加载时间过长，可以用分解法，分解后再进行加载，这样进度条更加流畅'
    }

    export enum Loding {
        '单个资源加载过大' = '如果某个3D资源，比如场景，预制体过大，加载时间过长，可以用分解法，分解后再进行加载，这样进度条更加流畅'
    }

    export enum LocalStorage {
        "Laya.LocalStorage.getItem()" = '在pc浏览器中，会自动把“null”转换为null，但是微信小游戏等不会，所以getItem()如果没有上传，返回的是一个字符串“null”，并不是是真正的null，所以不可以用Laya.LocalStorage.getItem()！==null，来判断有无存储，必须得用Laya.LocalStorage.getItem()！==“null”，如果用Laya.LocalStorage.getItem()！==null会被自动判定成Laya.LocalStorage.getItem()==false，用Laya.LocalStorage.getItem()！==“null”才为true，为了避免歧义，直接用Laya.LocalStorage.getItem()是正确或者是错误即可有无存储',

        'JSON.parse()' = 'json转换成对象问题，同上在pc浏览器中，会自动把“null”转换为null，当Laya.LocalStorage.getJson()时，如果是没有上传json，那么在小游戏中返回的是“null”，pc会自动把“null”转换为null，此时浏览器不会报错，而小游戏中JSON.parse(“null”)是报错的，因为非json结构，所以此时不可以直接用JSON.parse(Laya.LocalStorage.getJson())，需先做判断!Laya.LocalStorage.getItem(),有上传过才可以转换',

        '上传格式' = '为了统一，不要用number进行存储，所有的数据在本地存取的时候都用string和null，需要转换时则转换成number等',
    }

    /**出包*/
    export enum Pack {
        '资源加载不出来——01' = '分包后，依然需要把分包的一些资源例如场景json、图片等进行预加载，否则可能会出现丢失的情况',
        '资源加载不出来——02' = '上传平台是，如果还有写资源包括文件夹，因为大小写对不上而加载不出来，但是在浏览器中可能会忽略大小写',
    }

    export enum TS {
        " if(0)" = 'false',
        " if(1)" = 'true',
        '单例模式' = '防止当前类出现多个对象，故称之为单例模式，单例过后和模块差不多，是唯一的，如下：'
        // export class Img extends Laya.Image {
        //     private static _instance: Img;
        //     public static getInstance(): Img {
        //         if (！this._instance ) {
        //             this._instance = new Img();
        //         }
        //         return this._instance;
        //     }
        // }
        ,
        'obj={}和obj：{}的区别' = 'obj={}是属于赋值阶段，里面的任何属性都是一个值，obj：{}是声明阶段，可以不赋值，可以只有类型声明,最好用obj={}',
    }
    export enum JS {
        '优化变量内存1' = '最佳办法是将相对来说是全局变量的值初始化为null，很多类和对象也是全局的或者是一直存在的，里面的属性都可以为null，用过之后也为null，节点，变量都可以这么做，接触引用关系',
        '优化变量内存2' = 'let,const是局部变量声明，会加快内存处理机制介入，var有时候是垮作用于的，所以某种意义上来说，相对清理较晚',
    }

    export enum ObjArray {
        "一般会从json文件中取出对象数组" = '若想使用这个数组，必须每次深度拷贝，否则会修改json文件',
    }

    export enum WritingRule {
        '节点名称' = "节点名称用首字母大写",
        '数据表或者类中方法名称1' = "方法名称首字母小写，如果涉及到了一些查找和设置的，全部用set和get开头",
        '数据表或者类中方法名称2' = "方法名称首字母小写，如果涉及到了一些验证检查试用check开头",
        '数据表或者类中方法名称3' = "方法名称首字母小写，如果涉及到了一些特殊修改的可有用add，delete，change，find",

        '数据表的管理方法' = '可以将数据表数组当做一个对象，利用其中的get，set方法去修改和获取我们需要的数据表中的各种内容，这样我们更加能清楚的看到get，set方法是属于哪一个数据表，否则如果表过多则会混乱,这里不是内置的get，set方法参考如下：',
        // export let arr = {
        //     value: [],
        //     getName(name): string {
        //         let str;
        //         return str;
        //     },
        //    setName(): void {
        //         let str;
        //     },
        // }
        '当前页面被多出界面通知事件时的事件名称' = '多个页面通知同一个页面，用事件通知的时候，事件名称为当前页面名称加上被调用也面名称，多种事件则在家上一个字符串，uiname1+uiname2+‘string’，这种写法方便查找，也不用重新枚举事件名称',

        '模块中的全局变量名称' = '模块中的全局变量名称用_name命名形式，一看到这样的命名方式则是模块中的全局变量',

        '模块中的方法名' = '模块中的全局方法名称用_func（）命名形式，一看到这样的命名方式则是模块中的全局方法',

        '工具模块方法头名称含义' = '代表了当前分类和作用例如，node开头则是节点相关，random开头是随机，draw开头表示绘制矢量图，d2开头表示2维方面的工具，d3表示3d中的工具，dAll是2d和3d都可用，point表示坐标相关，number表示数字，obj表示处理对象，array表示处理数组，objArray表示处理对象数组，json表示处理json',

        '没有声明的变量赋值[name]' = '这样的变量赋值必须只用在当前页面，否则会发生找不到的情况。',
        '模块中同类型的方法可以重新内置一个模块' = '也可以用类把他们框在一起，方便使用'
    }

    export enum VSCode {
        '.点出的引用如何打开注释' = '例如Effect.选中其中一个，点击最右边有个尖头‘>’就可以打开注释',
    }

    /**发布和调试*/
    export enum Issue {
        '发布OPPO和VIVO包' = '如果出现一些类似于npm、cmd、node-modoul、VIVO-minigame等问题，很有可能是nodejs、npm出现问题，卸载安装nodejs，有时候也有必要安装一下VIVO-minigame，网上搜索‘VIVO-minigame’即可通过npm安装',

        '发布OPPO和VIVO包调试' = '网上教程可以用eclipse连接手机进行调试，如果控制面板中的安卓连接出现问题，可能是没有驱动，可以通过豌豆荚app，他会自动安装连接的驱动',

    }

    export enum Table {
        'wps表格数字输入逗号自动消失' = '右键单元格设置，数字设置为文本'
    }
}