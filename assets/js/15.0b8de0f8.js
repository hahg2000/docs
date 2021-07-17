(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{456:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"五、mybatis注解式开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、mybatis注解式开发"}},[t._v("#")]),t._v(" 五、Mybatis注解式开发")]),t._v(" "),a("p",[t._v("​\t"),a("span",{staticStyle:{color:"red"}},[t._v("mybatis 的注解，主要是用于替换映射文件。")]),t._v("而映射文件中无非存放着增、删、改、查的SQL映射标签。所以，mybatis注解，就是要替换映射文件中的 SQL 标签。")]),t._v(" "),a("p",[t._v("​\tmybatis 官方文档中指出，若要真正想发挥 mybatis 功能，还是要用映射文件。即 mybatis 官方并不建议通过注解方式来使用 mybatis。")]),t._v(" "),a("h2",{attrs:{id:"_5-1注解的基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1注解的基础知识"}},[t._v("#")]),t._v(" 5.1注解的基础知识")]),t._v(" "),a("p",[t._v("以下注解知识的讲解，均使用使用@Overide、@Deprecated（过时）、@SuppressWarnings举例。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-1注解的基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1注解的基础语法"}},[t._v("#")]),t._v(" 5.1.1注解的基础语法")]),t._v(" "),a("p",[t._v("A、注解后是没有分号的；")]),t._v(" "),a("p",[t._v("B、注解首字母是大写的，因为注解与类、接口是同一级别的。一个注解，后台对应着一个 @interface 类。属于同一级别的：类、接口、注解、"),a("strong",[t._v("枚举")]),t._v("；")]),t._v(" "),a("p",[t._v("C、在同一语法单元上，同一注解只能使用一次；")]),t._v(" "),a("p",[t._v("D、在注解与语法单元之间可以隔若干空行、注释等非代码内容。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-2注解的注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2注解的注解"}},[t._v("#")]),t._v(" 5.1.2注解的注解")]),t._v(" "),a("p",[t._v("​\t打开@Deprecated源码，看到其定义上还有三个注解：@Documented、@Retention、@Target。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CONSTRUCTOR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FIELD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOCAL_VARIABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" METHOD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PACKAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MODULE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PARAMETER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deprecated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Returns the version in which the annotated element became deprecated.\n     * The version string is in the same format and namespace as the value of\n     * the {@code @since} javadoc tag. The default value is the empty\n     * string.\n     *\n     * @return the version string\n     * @since 9\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("since")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Indicates whether the annotated element is subject to removal in a\n     * future version. The default value is {@code false}.\n     *\n     * @return whether the element is subject to removal\n     * @since 9\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forRemoval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("h3",{attrs:{id:"_5-1-3注解的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3注解的属性"}},[t._v("#")]),t._v(" 5.1.3注解的属性")]),t._v(" "),a("p",[t._v("​\t当某变量被声明了，但却未被使用；或某集合在声明或定义时未加泛型说明等情况发生时，会在代码下给出警告黄线。Ctrl + 1，可在代码上添加一个注解 @SuppressWarnings()。并且发现，不同的情况，其参数是不同的。")]),t._v(" "),a("p",[t._v("​\t打开其源码，看到其定义与 @Deprecated 是不同的，其接口体中声明了一个方法 String[] value()。那么该注解在使用时必须包含一个属性 value，类型为 String[]。且该参数没有默认值，即必须给出value的值。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("TYPE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FIELD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" METHOD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PARAMETER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CONSTRUCTOR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOCAL_VARIABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MODULE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOURCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuppressWarnings")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n     * The set of warnings that are to be suppressed by the compiler in the\n     * annotated element.  Duplicate names are permitted.  The second and\n     * successive occurrences of a name are ignored.  The presence of\n     * unrecognized warning names is <i>not</i> an error: Compilers must\n     * ignore any warning names they do not recognize.  They are, however,\n     * free to emit a warning if an annotation contains an unrecognized\n     * warning name.\n     *\n     * <p> The string {@code "unchecked"} is used to suppress\n     * unchecked warnings. Compiler vendors should document the\n     * additional warning names they support in conjunction with this\n     * annotation type. They are encouraged to cooperate to ensure\n     * that the same names work across multiple compilers.\n     * @return the set of warnings to be suppressed\n     */')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("p",[t._v("​\t对于注解的属性，需要注意以下几点：")]),t._v(" "),a("ol",[a("li",[t._v("数组问题该属性在源码定义时被声明为数组，但在具体使用时却只要赋予一个值，此时无需将该值再定义为一个数组后赋给该属性。直接将该值赋给该属性即可。例如，"),a("u",[t._v("对于声明为字符串数组 String[] 的 value 属性，可以将字符串 String 直接赋给该 value")]),t._v("。")]),t._v(" "),a("li",[t._v("默认值问题若某属性在注解定义时声明了其默认值，则在注解使用时，可以不为其指定属性值。注解会自动使用其默认值。")]),t._v(" "),a("li",[t._v("value 属性问题若注解在使用时只需使用其 value 属性，其它属性要么有默认值，要么该注解只声明了一个value 属性，此时，在注解使用时 value "),a("strong",[t._v("属性名称可省略")]),t._v("，而直接在注解的括号中写出该 value 属性的值。")]),t._v(" "),a("li",[t._v("无属性问题有些注解在定义时，是没有属性的，如 @Deprecated、@Overide 都是没有属性声明的，那么在使用时只需给出注解名称即可。")]),t._v(" "),a("li",[t._v("根据第 1 和第 3 点 可知，若注解的参数只需要填写 value 的时候可以写成下面三种格式：\n"),a("ul",[a("li",[t._v('@Xxxxx ( value = { "……" } )')]),t._v(" "),a("li",[t._v('@Xxxxx ( value = "……" )')]),t._v(" "),a("li",[t._v('@Xxxxx ( "……" )')])])])]),t._v(" "),a("h2",{attrs:{id:"_5-2-mybatis注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-mybatis注解"}},[t._v("#")]),t._v(" 5.2 Mybatis注解")]),t._v(" "),a("p",[t._v("​\t程序举例项目：annotation，在 dynamicMapper 基础上进行修改")]),t._v(" "),a("h3",{attrs:{id:"_5-2-1-insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-insert"}},[t._v("#")]),t._v(" 5.2.1@Insert")]),t._v(" "),a("p",[t._v("​\t其 value 属性用于指定要执行的 insert 语句。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert into student(name,age,score) values (#{name},#{age},#{score})"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertStudent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-2-2-selectkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-selectkey"}},[t._v("#")]),t._v(" 5.2.2 @SelectKey")]),t._v(" "),a("p",[t._v("原始的映射文件中的语句：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("insertStudentCatchId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    insert into student(name,age,score) values (#{name},#{age},#{score})\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("selectKey")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resultType")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keyProperty")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("AFTER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        select @@identity\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("selectKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("用于替换 XML 中的 <selectKey/>标签，用于返回新插入数据的 id 值。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("statement：获取新插入记录主键值的SQL语句；")])]),t._v(" "),a("li",[a("p",[t._v("keyProperty：获取的该主键值返回后初始化对象的哪个属性；")])]),t._v(" "),a("li",[a("p",[t._v("resultType：返回值类；")])]),t._v(" "),a("li",[a("p",[t._v("before：指定主键的生成相对于insert语句的执行先后顺序，该属性不能省略。")])])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert into student(name,age,score) values (#{name},#{age},#{score})"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SelectKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("before "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keyProperty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \nresultType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" statement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select @@identity"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertStudentCatchId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_5-2-3-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-delete"}},[t._v("#")]),t._v(" 5.2.3 @Delete")]),t._v(" "),a("p",[t._v("​\t其 value 属性用于指定要执行的 delete 语句。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@Delete(value = "delete from student where id=#{xxx} ")\nvoid deleteStudentById(int id);\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-2-4-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-4-update"}},[t._v("#")]),t._v(" 5.2.4 @Update")]),t._v(" "),a("p",[t._v("​\t其 value 属性用于指定要执行的 update 语句。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update student set name=#{name}, age=#{age}, score=#{score} where id=#{id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStudent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-2-5-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-5-select"}},[t._v("#")]),t._v(" 5.2.5 @Select")]),t._v(" "),a("p",[t._v("​\t其 value 属性用于指定要执行的 select 语句。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询所有")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from student"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectAllStudents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询指定学生")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select id,name,age,score from student where id=#{jjj}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectStudentById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"_5-2-6-删除映射文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-6-删除映射文件"}},[t._v("#")]),t._v(" 5.2.6 删除映射文件")]),t._v(" "),a("p",[t._v("​\t由于MyBatis注解替换的是映射文件，所以这里就不需要映射文件了，将其直接删除。")]),t._v(" "),a("h3",{attrs:{id:"_5-2-7-修改主配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-7-修改主配置文件"}},[t._v("#")]),t._v(" 5.2.7 修改主配置文件")]),t._v(" "),a("p",[t._v("​\t由于没有了映射文件，所以主配置文件中不能使用 <mapper/> 注册 mapper 的位置了。需要使用 <package/> 标签。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mappers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("package")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.hahg.dao"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mappers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);