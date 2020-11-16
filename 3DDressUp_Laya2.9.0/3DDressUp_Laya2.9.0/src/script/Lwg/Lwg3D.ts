// import { EventAdmin } from "./lwg";

import { EventAdmin } from "./Lwg";

/**管理3D的模块*/
export module lwg3D {
    class Script3DBase extends Laya.Script3D {

    }
    /**3D场景通用父类*/
    export class _Scene3DBase extends Laya.Script3D {
        /**类名*/
        private calssName: string;
        /**摄像机的初始位置*/
        _cameraFp: Laya.Vector3 = new Laya.Vector3();
        constructor() {
            super();
        }
        public get _Owner(): Laya.Scene3D {
            return this.owner as Laya.Scene3D;
        }
        public get _MainCamera(): Laya.Camera {
            if (this._Owner.getChildByName('Main Camera')) {
                return this._Owner.getChildByName('Main Camera') as Laya.Camera;
            }
            for (let index = 0; index < this._Owner.numChildren; index++) {
                const element = this._Owner.getChildAt(index);
                if (typeof element == typeof (Laya.Camera)) {
                    return element as Laya.Camera;
                }
            }
        }
        onAwake(): void {
            // 类名
            this.calssName = this['__proto__']['constructor'].name;
            if (this._MainCamera) {
                this._cameraFp.x = this._MainCamera.transform.localPositionX;
                this._cameraFp.y = this._MainCamera.transform.localPositionY;
                this._cameraFp.z = this._MainCamera.transform.localPositionZ;
            }
            this.lwgOnAwake();
        }
        lwgOnAwake(): void {
        }
        onEnable() {
            // 组件变为的self属性
            this._Owner[this.calssName] = this;
            this.lwgEventRegister();
            this.lwgOnEnable();
            this.lwgOpenAni();
        }
        /**场景中的一些事件，在lwgOnAwake和lwgOnEnable之间执行*/
        lwgEventRegister(): void { };
        /**初始化，在onEnable中执行，重写即可覆盖*/
        lwgOnEnable(): void { }
        onStart(): void {
            this.lwgOnStart();
        }
        lwgOnStart(): void { }
        /**开场动画*/
        lwgOpenAni(): void {
        }
        /**离场动画*/
        lwgVanishAni(): void {
        }
        onUpdate(): void {
            this.lwgOnUpDate();
        }
        /**每帧更新时执行，尽量不要在这里写大循环逻辑或者使用*/
        lwgOnUpDate(): void {
        }
        onDisable(): void {
            this.lwgOnDisable();
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            EventAdmin._offCaller(this);
        }
        /**离开时执行，子类不执行onDisable，只执行lwgDisable*/
        lwgOnDisable(): void {
        }
    }
    /**3D物件通用父类*/
    export class _Object3D extends Laya.Script3D {
        constructor() {
            super();
        }
        get _Owner(): Laya.Sprite3D {
            return this.owner as Laya.Sprite3D;
        }
        get OwnerTransform(): Laya.Transform3D {
            return (this.owner.scene as Laya.Sprite3D).transform;
        }
        get OwnerScene(): Laya.Scene3D {
            return this.owner.scene as Laya.Scene3D;
        }
        /**物理组件*/
        get OwnerRig(): Laya.RigidBody {
            if (!this._Owner['_OwnerRig']) {
                this._Owner['_OwnerRig'] = this._Owner.getComponent(Laya.Rigidbody3D);
            }
            return this._Owner['_OwnerRig'];
        }
        /**物理组件*/
        get OwnerBox(): Laya.RigidBody {
            if (!this._Owner['_OwnerRig']) {
                this._Owner['_OwnerRig'] = this._Owner.getComponent(Laya.Rigidbody3D);
            }
            return this._Owner['_OwnerRig'];
        }
        onAwake(): void {
            // 组件变为的self属性
            this.lwgNodeDec();
        }
        lwgNodeDec(): void { }
        onEnable() {
            this.lwgEventReg();
            this.lwgOnEnable();
        }
        /**初始化，在onEnable中执行，重写即可覆盖*/
        lwgOnEnable(): void { }
        /**点击事件注册*/
        lwgBtnClick(): void {
        }
        /**事件注册*/
        lwgEventReg(): void {
        }
        onUpdate(): void {
            this.lwgOnUpdate();
        }
        lwgOnUpdate(): void {

        }
        onDisable(): void {
            this.lwgOnDisable();
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
            // EventAdmin.offCaller(this);
        }
        /**离开时执行，子类不执行onDisable，只执行lwgDisable*/
        lwgOnDisable(): void {
        }
    }
}