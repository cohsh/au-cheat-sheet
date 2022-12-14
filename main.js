const basicSIU = ['\\mathrm{s}', '\\mathrm{m}', '\\mathrm{kg}', '\\mathrm{A}' ]
const basicAU = ['\\hbar', 'a_0', 'm_\\mathrm{e}', 'e' ]
const derivedSIU = { 'force':'\\mathrm{N}', 'electric charge':'\\mathrm{C}',
                        'electric potential':'\\mathrm{V}', 'magnetic flux density':'\\mathrm{T}',
                        'energy':'\\mathrm{J}', 'permittivity':'\\mathrm{\\mathrm{F \\cdot m^{-1}}}',
                        'electric dipole':'\\mathrm{C \\cdot m}', 'electric field':'\\mathrm{V \\cdot m^{-1}}',
                        'magnetic moment':'\\mathrm{J\\cdot T^{-1}}', 'momentum':'\\mathrm{N \\cdot s}',
                        'action':'\\mathrm{J\\cdot s}'} 

function _convertDimensions(SIUDimensions) {
    // SIU: Time, Length, Mass, Electric current
    // ->
    // AU: Action, Length, Mass, Charge
    let AUDimensions = [0, 0, 0, 0];
    // Action
    AUDimensions[0] = -1 * SIUDimensions[0] + SIUDimensions[3];
    // Length
    AUDimensions[1] =  2 * SIUDimensions[0] + SIUDimensions[1] -2 * SIUDimensions[3];
    // Mass
    AUDimensions[2] =  1 * SIUDimensions[0] + SIUDimensions[2] -1 * SIUDimensions[3];
    // Charge
    AUDimensions[3] = SIUDimensions[3];

    return  AUDimensions;
}

function _generateExpression(quantity, unit, dimensions) {
    if (unit == 'SIU') {
        basicUnits = basicSIU
    } else if (unit == 'AU') {
        basicUnits = basicAU
    }
    result = '$'
    for (let i = 0; i < 4; i++) {
        if (Math.abs(dimensions[i]) > 1 || dimensions[i] == -1) {
            result += basicUnits[i] + '^{' + dimensions[i].toString() + '}'
        } else if ( dimensions[i] == 1 ) {
            result += basicUnits[i]
        } else {
            continue
        }
        let j = 0
        for (let k = i + 1; k < 4; k++) {
            if ( dimensions[k] != 0 ) {
                j += 1
            }
        }
        if (j != 0) {
            result += ' \\cdot '
        } else {
            result += ' '
        }
    }
    if (quantity in derivedSIU && unit == 'SIU') {
        result += '~(' + derivedSIU[quantity] + ' )'
    }
    result += '$'
    return result
}

function writeUnit(quantity, dimensionsSIU) {
    // SIU: Time, Length, Mass, Electric current
    const elementQuantity = document.getElementById(quantity);
    const elementSIU = document.getElementById(quantity+':SIU');
    const elementAU = document.getElementById(quantity+':AU');
    const expressionSIU = _generateExpression(quantity, 'SIU', dimensionsSIU)
    const dimensionsAU = _convertDimensions(dimensionsSIU)
    const expressionAU = _generateExpression(quantity, 'AU', dimensionsAU)
    elementQuantity.innerHTML = quantity.slice(0, 1).toUpperCase() + quantity.slice(1) ;;
    elementSIU.innerHTML = expressionSIU;
    elementAU.innerHTML = expressionAU;
}
