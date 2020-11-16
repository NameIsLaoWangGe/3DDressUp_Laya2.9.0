// import { EventAdmin } from "./lwg";

import { EventAdmin } from "./Lwg";

/**管理3D的模块*/
export module lwg3D {
    class _Script3DBase extends Laya.Script3D {
        /**类名*/
        _calssName: string;
        get _cameraPos(): Laya.Vector3 {
            if (!this['__cameraPos']) {
                return this['__cameraPos'] = new Laya.Vector3(this._MainCamera.transform.localPositionX, this._MainCamera.transform.localPositionY, this._MainCamera.transform.localPositionZ);
            } else {
                return this['__cameraPos'];
            }
        }
        get _MainCamera(): Laya.Camera {
            if (this['__MainCamera']) {
                if (this.owner.getChildByName('Main Camera')) {
                    return this['__MainCamera'] = this.owner.getChildByName('Main Camera') as Laya.Camera;
                }
                for (let index = 0; index < this.owner.numChildren; index++) {
                    const element = this.owner.getChildAt(index);
                    if (typeof element == typeof (Laya.Camera)) {
                        return this['__MainCamera'] = element as Laya.Camera;
                    }
                }
            } else {
                return this['__MainCamera'];
            }
        }
        /**子节点*/
        _child(name: string): Laya.MeshSprite3D {
            if (!this[`_child${name}`]) {
                if (this.owner.getChildByName(name)) {
                    return this[`_child${name}`] = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}`];
            }
        }
        /**子节点*/
        _childTransform(name: string): Laya.Transform {
            if (!this[`_child${name}Transform`]) {
                if (this.owner.getChildByName(name)) {
                    let _MeshSprite3D = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                    this[`_child${name}Transform`] = _MeshSprite3D.transform;
                    return this[`_child${name}Transform`];
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}Transform`];
            }
        }
        /**子节点*/
        _childPosition(name: string): Laya.Vector3 {
            if (!this[`_child${name}TransformPosition`]) {
                if (this.owner.getChildByName(name)) {
                    let _MeshSprite3D = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                    this[`_child${name}TransformPosition`] = _MeshSprite3D.transform.position;
                    return this[`_child${name}TransformPosition`];
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}TransformPosition`];
            }
        }
        /**子节点*/
        _childLocalPosition(name: string): Laya.Vector3 {
            if (!this[`_child${name}TransformLocalPosition`]) {
                if (this.owner.getChildByName(name)) {
                    let _MeshSprite3D = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                    this[`_child${name}TransformLocalPosition`] = _MeshSprite3D.transform.localPosition;
                    return this[`_child${name}TransformLocalPosition`];
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}TransformLocalPosition`];
            }
        }
        /**子节点*/
        _childLocalEuler(name: string): Laya.Vector3 {
            if (!this[`_child${name}TransformLocalEuler`]) {
                if (this.owner.getChildByName(name)) {
                    let _MeshSprite3D = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                    this[`_child${name}TransformLocalEuler`] = _MeshSprite3D.transform.localRotationEuler;
                    return this[`_child${name}TransformLocalEuler`];
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}TransformLocalEuler`];
            }
        }
        /**子节点*/
        _childLocalScale(name: string): Laya.Vector3 {
            if (!this[`_child${name}TransformLocalScale`]) {
                if (this.owner.getChildByName(name)) {
                    let _MeshSprite3D = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                    this[`_child${name}TransformLocalScale`] = _MeshSprite3D.transform.localScale;
                    return this[`_child${name}TransformLocalScale`];
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}TransformLocalScale`];
            }
        }
        lwgOnAwake(): void {
        }
        /**场景中的一些事件，在lwgOnAwake和lwgOnEnable之间执行*/
        lwgEventRegister(): void { };
        /**初始化，在onEnable中执行，重写即可覆盖*/
        lwgOnEnable(): void { }
        lwgOnStart(): void { }

        /**每帧更新时执行，尽量不要在这里写大循环逻辑或者使用*/
        lwgOnUpdate(): void {
        }
        /**离开时执行，子类不执行onDisable，只执行lwgDisable*/
        lwgOnDisable(): void {
        }
    }

    /**3D场景通用父类*/
    export class _Scene3DBase extends _Script3DBase {
        constructor() {
            super();
        }
        public get _Owner(): Laya.Scene3D {
            return this.owner as Laya.Scene3D;
        }
        /**摄像机的初始位置*/
        _cameraFp: Laya.Vector3;
        onAwake(): void {
            // 类名
            this._calssName = this['__proto__']['constructor'].name;
            if (this._MainCamera) {
                this._cameraFp.x = this._MainCamera.transform.localPositionX;
                this._cameraFp.y = this._MainCamera.transform.localPositionY;
                this._cameraFp.z = this._MainCamera.transform.localPositionZ;
            }
            this.lwgOnAwake();
        }
        onEnable() {
            // 组件变为的self属性
            this._Owner[this._calssName] = this;
            this.lwgEventRegister();
            this.lwgOnEnable();
            this.lwgOpenAni();
        }
        onStart(): void {
            this.lwgOnStart();
        }
        /**开场动画*/
        lwgOpenAni(): void {
        }
        /**离场动画*/
        lwgVanishAni(): void {
        }
        onUpdate(): void {
            this.lwgOnUpdate();
        }
        onDisable(): void {
            this.lwgOnDisable();
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            EventAdmin._offCaller(this);
        }
    }
    /**3D物件通用父类*/
    export class _Object3D extends _Script3DBase {
        constructor() {
            super();
        }
        get _Owner(): Laya.MeshSprite3D {
            return this.owner as Laya.MeshSprite3D;
        }
        _localScale(): Laya.Vector3 {
            return this._Owner.transform.localScale;
        }
        _localPosition(): Laya.Vector3 {
            return this._Owner.transform.localPosition;
        }
        _position(): Laya.Vector3 {
            return this._Owner.transform.position;
        }
        _localRotationEuler(): Laya.Vector3 {
            return this._Owner.transform.localRotationEuler;
        }
        get _Parent(): Laya.MeshSprite3D {
            return this.owner.parent as Laya.MeshSprite3D;
        }
        get _transform(): Laya.Transform3D {
            return this._Owner.transform;
        }
        get _Scene3D(): Laya.Scene3D {
            return this.owner.scene as Laya.Scene3D;
        }
        /**物理组件*/
        get _Rigidbody3D(): Laya.RigidBody {
            if (!this._Owner['__Rigidbody3D']) {
                this._Owner['__Rigidbody3D'] = this._Owner.getComponent(Laya.Rigidbody3D);
            }
            return this._Owner['__Rigidbody3D'];
        }
        onAwake(): void {
            // 组件变为的self属性
            this.lwgOnAwake();
        }
        onEnable() {
            this.lwgEventRegister();
            this.lwgOnEnable();
        }
        onUpdate(): void {
            this.lwgOnUpdate();
        }
        onDisable(): void {
            this.lwgOnDisable();
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
            EventAdmin._offCaller(this);
        }
    }
}