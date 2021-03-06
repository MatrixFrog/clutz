declare namespace ಠ_ಠ.clutz.typedefs {
  class Aclass extends Aclass_Instance {
  }
  class Aclass_Instance {
    private noStructuralTyping_: any;
  }
  /* skipped emitting type alias typedefs.ArrayLike to avoid collision with existing one in lib.d.ts. */
  var a : ಠ_ಠ.clutz.typedefs.Aclass ;
  type aclassalias = ಠ_ಠ.clutz.typedefs.Aclass ;
  //!! TODO(rado): arr should use the unexpanded ( ಠ_ಠ.clutz.typedefs.Aclass ) [].
  var arr : ಠ_ಠ.clutz.typedefs.arrayA ;
  var arrT : ಠ_ಠ.clutz.typedefs.arrayA ;
  type arrayA = ಠ_ಠ.clutz.typedefs.Aclass [] ;
  //!! TODO(rado): fn should use the strToStr typedef.
  function fn (a : string ) : string ;
  type strOrFunc = string | ( ( ) => string ) ;
  type strToStr = (a : string ) => string ;
}
declare module 'goog:typedefs' {
  import alias = ಠ_ಠ.clutz.typedefs;
  export = alias;
}
