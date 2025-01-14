const gulp = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const concat = require('gulp-concat')
const pack = require('./package.json')

gulp.task('build', () => {
  return gulp.src([
    './ctor.js',

    // object
    './assign.js',
    './extend.js',
    './objectEach.js',
    './lastObjectEach.js',
    './objectMap.js',

    // array
    './map.js',
    './some.js',
    './every.js',
    './includeArrays.js',
    './arrayEach.js',
    './lastArrayEach.js',
    './uniq.js',
    './union.js',
    './toArray.js',
    './sortBy.js',
    './shuffle.js',
    './sample.js',
    './slice.js',
    './filter.js',
    './findKey.js',
    './includes.js',
    './find.js',
    './reduce.js',
    './copyWithin.js',
    './chunk.js',
    './zip.js',
    './unzip.js',
    './zipObject.js',
    './pluck.js',
    './invoke.js',
    './invokeMap.js',
    './toArrayTree.js',
    './toTreeArray.js',
    './findTree.js',
    './eachTree.js',
    './mapTree.js',
    './filterTree.js',
    './searchTree.js',
    './arrayIndexOf.js',
    './arrayLastIndexOf.js',

    // base
    './hasOwnProp.js',
    './isArray.js',
    './isNull.js',
    './isNaN.js',
    './isUndefined.js',
    './isFunction.js',
    './isObject.js',
    './isString.js',
    './isPlainObject.js',
    './isLeapYear.js',
    './isDate.js',
    './eqNull.js',
    './each.js',
    './forOf.js',
    './lastForOf.js',
    './indexOf.js',
    './lastIndexOf.js',
    './keys.js',
    './values.js',
    './clone.js',
    './getSize.js',
    './lastEach.js',
    './remove.js',
    './clear.js',
    './isFinite.js',
    './isFloat.js',
    './isInteger.js',
    './isBoolean.js',
    './isNumber.js',
    './isRegExp.js',
    './isError.js',
    './isTypeError.js',
    './isEmpty.js',
    './isSymbol.js',
    './isArguments.js',
    './isElement.js',
    './isDocument.js',
    './isWindow.js',
    './isFormData.js',
    './isMap.js',
    './isWeakMap.js',
    './isSet.js',
    './isWeakSet.js',
    './isMatch.js',
    './isEqual.js',
    './isEqualWith.js',
    './getType.js',
    './uniqueId.js',
    './findIndexOf.js',
    './findLastIndexOf.js',
    './toStringJSON.js',
    './toJSONString.js',
    './entries.js',
    './pick.js',
    './omit.js',
    './first.js',
    './last.js',
    './has.js',
    './get.js',
    './set.js',
    './groupBy.js',
    './countBy.js',
    './range.js',
    './destructuring.js',

    // number
    './random.js',
    './max.js',
    './min.js',
    './commafy.js',
    './toFixedString.js',
    './toFixedNumber.js',
    './toInteger.js',
    './toNumber.js',
    './add.js',
    './subtract.js',
    './multiply.js',
    './divide.js',
    './sum.js',
    './mean.js',

    // date
    './getWhatYear.js',
    './getWhatMonth.js',
    './getWhatDay.js',
    './toStringDate.js',
    './toDateString.js',
    './now.js',
    './timestamp.js',
    './isDateSame.js',
    './getWhatWeek.js',
    './getYearDay.js',
    './getYearWeek.js',
    './getMonthWeek.js',
    './getDayOfYear.js',
    './getDayOfMonth.js',
    './getDateDiff.js',

    // string
    './padEnd.js',
    './padStart.js',
    './repeat.js',
    './trim.js',
    './trimRight.js',
    './trimLeft.js',
    './escape.js',
    './unescape.js',
    './camelCase.js',
    './kebabCase.js',
    './startsWith.js',
    './endsWith.js',
    './template.js',
    './toString.js',

    // function
    './property.js',
    './bind.js',
    './once.js',
    './after.js',
    './before.js',
    './throttle.js',
    './debounce.js',
    './delay.js',

    // url
    './unserialize.js',
    './serialize.js',
    './parseUrl.js',

    // browse
    './getBaseURL.js',
    './locat.js',
    './cookie.js',
    './browse.js'
  ])
    .pipe(concat(`${pack.name}.js`))
    .pipe(gulp.dest('dist'))
})
