# Atomic Units Cheat Sheet
[cohsh.github.io/au-cheat-sheet](https://cohsh.github.io/au-cheat-sheet/)

## Feature
表に含まれる任意の物理量を $\mathrm{X}$ と書きます。
その次元を
$[\mathrm{X}]=[\mathrm{s}]^{p_1}[\mathrm{m}]^{p_2}[\mathrm{kg}]^{p_3}[\mathrm{A}]^{p_4}= [\hbar]^{q_1}[a_0]^{q_2}[m_\mathrm{e}]^{q_3}[e]^{q_4}$
と書くとき、
$\mathbf{p}=[p_1~p_2~p_3~p_4]^T$と$\mathbf{q}=[q_1~q_2~q_3~q_4]^T$は一意に定まります。

そして$\mathbf{p}$と$\mathbf{q}$の間には
$$
\begin{bmatrix}
-1 & 0 & 0 & 1 \\
2 & 1 & 0 & -2 \\
1 & 0 & 1 & -1 \\
0 & 0 & 0 & 1
\end{bmatrix}\mathbf{p}=\mathbf{q}
$$
が成り立ちます。

本チートシートにおいては、この関係式を使って、SI基本単位による表現からHartree原子単位系による表現を求めています。
